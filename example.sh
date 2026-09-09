#!/bin/bash
# # # echo "Enter Number"
# # # read Num
# # # if [ $Num -lt 10 ]; then
# # # 	echo "$Num is lessthan 10"
# # # else
# # # 	echo "$Num is greaterthan 10"
# # # fi


# # # # Define the file name to check
# # # file="example.sh"

# # # # Check if the file exists
# # # if [ -e "$file" ]; then
# # #     echo "File exists: $file"
# # # else
# # #     echo "File not found: $file"
# # # fi


# # #Start of for loop
# # for a in 1 2 3 4 5 6 7 8 9 10
# # do
# #     # if a is equal to 5 break the loop
# #     if [ $a == 5 ]
# #     then
# #         break
# #     fi
# #     # Print the value
# #     echo "Iteration no $a"
# # done


# #!/bin/bash

# # Prompt the user for an input score
# echo -n "Enter your exam score (0-100): "
# read score

# # 1. The 'if' statement checks the first condition
# if [ "$score" -ge 90 ]; then
#     echo "Excellent! You got an A."

# # 2. The 'elif' statement checks an alternative condition if the first failed
# elif [ "$score" -ge 80 ]; then
#     echo "Good job! You got a B."

# # Another 'elif' statement to continue checking down the line
# elif [ "$score" -ge 70 ]; then
#     echo "You passed! You got a C."

# # 3. The 'else' block executes if none of the above criteria are true
# else
#     echo "You need to study more. You got a failing grade."
# fi

#!/bin/bash
# filepath: c:\Users\Pavan K Raj\Shree-KT\Git-KT\example.sh

add_numbers() {
    sum=$(( $1 + $2 ))
    echo "The sum of $1 and $2 is: $sum"
}

add_numbers "$1" "$2"