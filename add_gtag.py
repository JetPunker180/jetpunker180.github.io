import os

# The Google Tag code to be inserted
GTAG_CODE = """<script async src="https://www.googletagmanager.com/gtag/js?id=G-NBCJRZZRRD"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-NBCJRZZRRD');
</script>
"""

def update_html_files():
    # os.walk travels through all subdirectories
    for root, dirs, files in os.walk("."):
        for file in files:
            if file == "index.html":
                file_path = os.path.join(root, file)
                
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()

                # Check if tag is already there to avoid duplicates
                if "G-NBCJRZZRRD" in content:
                    print(f"Skipping (already exists): {file_path}")
                    continue

                # Insert right after <head>
                if "<head>" in content:
                    new_content = content.replace("<head>", f"<head>\n{GTAG_CODE}")
                    
                    with open(file_path, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    print(f"Updated: {file_path}")
                else:
                    print(f"Warning: No <head> tag found in {file_path}")

if __name__ == "__main__":
    update_html_files()