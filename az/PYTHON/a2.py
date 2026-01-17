# Input: number of elements
n = int(input("Enter number of elements in the list: "))

# Input: list elements
numbers = []
for i in range(n):
    element = int(input(f"Enter element {i+1}: "))
    numbers.append(element)

# Input: number to search
search_num = int(input("Enter the number to search: "))

# Search and print results
if search_num in numbers:
    index = numbers.index(search_num)
    print(f"YES, found at index {index}")
else:
    print("NO")

5