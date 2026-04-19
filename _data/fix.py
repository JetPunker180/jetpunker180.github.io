import re
import os

def fix_mcq_colons_precise(file_path):
    # Pattern explanation:
    # (/mcq\d+) -> Matches /mcq followed by any number of digits
    # \b        -> Word boundary: ensures we don't stop in the middle of a number
    # (?!:)     -> Negative lookahead: only matches if NO colon follows
    pattern = r"(/mcq\d+)\b(?!:)"
    
    if not os.path.exists(file_path):
        print(f"Error: {file_path} not found!")
        return

    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find issues
    matches = re.findall(pattern, content)
    if not matches:
        print("No missing colons found.")
        return

    print(f"Found {len(matches)} issues (e.g., {matches[:3]}). Fixing...")

    # The \1: adds the colon only after the full number boundary
    fixed_content = re.sub(pattern, r"\1:", content)

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(fixed_content)
    
    print("Success! Every /mcq{number} now has a trailing colon correctly.")

if __name__ == "__main__":
    # Ensure the script looks for the file in the correct directory
    fix_mcq_colons_precise('titles.yml')