
with open('e:/farm/farm/src/app/globals.css', 'r', encoding='utf-8') as f:
    content = f.read()
    open_braces = content.count('{')
    close_braces = content.count('}')
    print(f"Open: {open_braces}, Close: {close_braces}")
    
    # Check nesting
    stack = []
    for i, char in enumerate(content):
        if char == '{':
            stack.append(i)
        elif char == '}':
            if not stack:
                print(f"Extra closing brace at index {i}")
            else:
                stack.pop()
    if stack:
        print(f"Unclosed opening braces at indices: {stack}")
