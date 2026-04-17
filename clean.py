import os
import re
from pathlib import Path

def remove_opening_tags(file_path):
    """
    Remove specific opening tags but keep their closing tags:
    - Removes ONLY: <html>, <head>, <meta>, <!DOCTYPE>
    - NEVER removes: <header> (ANY header tag, ANY class, ANY attributes)
    - NEVER removes: </header>
    - NEVER removes: </head>
    - NEVER removes: ANY other tags
    """
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original_content = content
    
    # Patterns to remove (ONLY these 4 types - NO header tags)
    remove_patterns = [
        # Remove <html> tag
        r'(?i)<html[^>]*>',
        
        # Remove <head> tag
        r'(?i)<head[^>]*>',
        
        # Remove <meta> tag
        r'(?i)<meta[^>]*>',
        
        # Remove <!DOCTYPE> tag
        r'(?i)<!DOCTYPE[^>]*>',
    ]
    
    # Apply removals
    for pattern in remove_patterns:
        content = re.sub(pattern, '', content, flags=re.IGNORECASE | re.MULTILINE)
    
    # Clean up extra blank lines
    content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
    content = re.sub(r'^\s*\n', '', content)
    
    # Write the cleaned content if changed
    if content != original_content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        return True
    return False

def process_all_html_files(root_dir):
    """
    Process all HTML files in directory and subdirectories
    """
    html_files = list(Path(root_dir).rglob('*.html'))
    html_files = [f for f in html_files if '_site' not in str(f)]
    
    print(f"\n{'='*60}")
    print(f"Found {len(html_files)} HTML files to process")
    print(f"{'='*60}\n")
    
    cleaned_count = 0
    
    for file_path in html_files:
        try:
            if remove_opening_tags(file_path):
                cleaned_count += 1
                print(f"✅ Cleaned: {file_path}")
            else:
                print(f"⏭️  No changes: {file_path}")
        except Exception as e:
            print(f"❌ Error: {file_path} - {e}")
    
    print(f"\n{'='*60}")
    print(f"✅ Complete: {cleaned_count} files cleaned")
    print(f"{'='*60}")

def preview_changes(file_path):
    """
    Preview what will be removed vs kept
    """
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    print(f"\n📄 File: {file_path}")
    print(f"{'-'*40}")
    
    # Tags that will be REMOVED (ONLY these)
    remove_patterns = [
        (r'<html[^>]*>', '<html...>'),
        (r'<head[^>]*>', '<head...>'),
        (r'<meta[^>]*>', '<meta...>'),
        (r'<!DOCTYPE[^>]*>', '<!DOCTYPE...>'),
    ]
    
    removed_found = False
    for pattern, description in remove_patterns:
        matches = re.findall(pattern, content, re.IGNORECASE)
        for match in matches:
            # Skip if it's a header tag (just in case)
            if 'header' not in match.lower():
                removed_found = True
                print(f"   🔸 Will REMOVE: {match.strip()}")
    
    if not removed_found:
        print("   ℹ️ No opening tags found to remove")
    
    print()
    
    # Tags that will be KEPT (including ALL header variations)
    keep_patterns = [
        (r'(?i)<header[^>]*>', '<header...> (ALL header tags are KEPT)'),
        (r'(?i)</header>', '</header>'),
        (r'(?i)</head>', '</head>'),
        (r'(?i)<body[^>]*>', '<body...>'),
        (r'(?i)<main[^>]*>', '<main...>'),
        (r'(?i)<footer[^>]*>', '<footer...>'),
        (r'(?i)<div[^>]*>', '<div...>'),
        (r'(?i)<section[^>]*>', '<section...>'),
        (r'(?i)<h1[^>]*>', '<h1...>'),
        (r'(?i)<h2[^>]*>', '<h2...>'),
        (r'(?i)<p[^>]*>', '<p...>'),
        (r'(?i)<a[^>]*>', '<a...>'),
        (r'(?i)<nav[^>]*>', '<nav...>'),
        (r'(?i)<ul[^>]*>', '<ul...>'),
        (r'(?i)<li[^>]*>', '<li...>'),
        (r'(?i)<script[^>]*>', '<script...>'),
        (r'(?i)<link[^>]*>', '<link...>'),
        (r'(?i)<span[^>]*>', '<span...>'),
        (r'(?i)<article[^>]*>', '<article...>'),
        (r'(?i)<aside[^>]*>', '<aside...>'),
    ]
    
    keep_found = False
    for pattern, description in keep_patterns:
        matches = re.findall(pattern, content, re.IGNORECASE)
        for match in matches:
            keep_found = True
            print(f"   ✅ Will KEEP: {match.strip()}")
    
    if not keep_found:
        print("   ℹ️ No matching keep tags found")

def verify_header_tags(root_dir):
    """
    Specifically verify that NO header tags are being removed
    """
    html_files = list(Path(root_dir).rglob('*.html'))
    html_files = [f for f in html_files if '_site' not in str(f)]
    
    print("\n" + "="*60)
    print("VERIFICATION: Header tags that will be KEPT")
    print("="*60)
    
    all_headers = []
    
    for file_path in html_files:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Find all header tags
        header_tags = re.findall(r'(?i)<header[^>]*>|</header>', content)
        
        if header_tags:
            for tag in header_tags:
                if tag not in all_headers:
                    all_headers.append(tag)
                    print(f"   ✅ KEPT: {tag}")
    
    if not all_headers:
        print("   ℹ️ No <header> tags found in any files")
    else:
        print(f"\n   📊 Total unique header tags found: {len(all_headers)}")

if __name__ == "__main__":
    # Set your project root directory
    PROJECT_ROOT = r"E:\backup"  # CHANGE THIS TO YOUR PATH
    
    print("\n" + "="*60)
    print("OPENING TAG REMOVER")
    print("Removes ONLY: <html>, <head>, <meta>, <!DOCTYPE>")
    print("NEVER removes: <header> tags (ANY class/attribute)")
    print("="*60)
    print(f"Root directory: {PROJECT_ROOT}")
    
    # First, verify header tags
    verify_header_tags(PROJECT_ROOT)
    
    # Show preview
    print("\n" + "="*60)
    print("PREVIEW - Tags that will be removed vs kept")
    print("="*60)
    
    html_files = list(Path(PROJECT_ROOT).rglob('*.html'))
    html_files = [f for f in html_files if '_site' not in str(f)]
    
    if not html_files:
        print("❌ No HTML files found!")
        exit()
    
    for file_path in html_files[:5]:  # Preview first 5 files
        preview_changes(file_path)
    
    print("\n" + "="*60)
    response = input(f"\n⚠️  Do you want to clean ALL {len(html_files)} HTML files? (yes/no): ")
    
    if response.lower() == 'yes':
        process_all_html_files(PROJECT_ROOT)
    else:
        print("Operation cancelled.")