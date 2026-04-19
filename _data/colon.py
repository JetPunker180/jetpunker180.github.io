import re
import os

def fix_mcq_links_final(file_path):
    # Pattern explanation:
    # (/mcq\d+) -> Matches /mcq followed by digits
    # \b        -> Word boundary (stops at end of number)
    # (?!/?:)   -> Negative lookahead: only matches if NO slash or colon already exists
    pattern = r"(/mcq\d+)\b(?!/?:)"
    
    if not os.path.exists(file_path):
        print(f"Error: {file_path} not found!")
        return

    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    matches = re.findall(pattern, content)
    if not matches:
        print("No missing slash/colons found for MCQ links.")
        return

    print(f"Found {len(matches)} MCQ links to fix. Applying '/:'...")

    # This turns /mcq67 into /mcq67/:
    fixed_content = re.sub(pattern, r"\1/:", content)

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(fixed_content)
    
    print("Success! titles.yml updated for better SEO and tab visibility.")

if __name__ == "__main__":
    fix_mcq_links_final('titles.yml')