# Creating a tuple
my_tuple = ("apple", "banana", "cherry", "apple", 10, 20)
print("Original Tuple:", my_tuple)

# Accessing elements using index
print("First element:", my_tuple[0])
print("Last element:", my_tuple[-1])

# Slicing a tuple
print("Slice [1:4]:", my_tuple[1:4])

# Iterating over a tuple
print("Iterating through tuple:")
for item in my_tuple:
    print(item)

# Checking membership
print("Is 'banana' in tuple?", "banana" in my_tuple)

# Tuple length
print("Length of tuple:", len(my_tuple))

# Count and Index
print("Count of 'apple':", my_tuple.count("apple"))
print("Index of 'cherry':", my_tuple.index("cherry"))
