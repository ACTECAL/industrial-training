import React from 'react';
import CheatSheetLayout from '../components/CheatSheetLayout';

const cppCheats = [
  {
    title: "1. Hello World",
    code: `#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    return 0;
}`
  },
  {
    title: "2. Variables and Data Types",
    code: `#include <iostream>
using namespace std;

int main() {
    int number = 42;
    float decimal = 3.14f;
    double bigDecimal = 3.14159;
    char letter = 'A';
    bool isTrue = true;
    string text = "Hello C++";
    
    cout << "Integer: " << number << endl;
    cout << "Float: " << decimal << endl;
    cout << "Double: " << bigDecimal << endl;
    cout << "Char: " << letter << endl;
    cout << "Bool: " << isTrue << endl;
    cout << "String: " << text << endl;
    
    return 0;
}`
  },
  {
    title: "3. Input Output",
    code: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string name;
    int age;
    
    cout << "Enter your name: ";
    getline(cin, name);
    
    cout << "Enter your age: ";
    cin >> age;
    
    cout << "Hello " << name << ", you are " << age << " years old." << endl;
    return 0;
}`
  },
  {
    title: "4. Control Structures",
    code: `#include <iostream>
using namespace std;

int main() {
    int number = 15;
    
    // If statement
    if (number > 10) {
        cout << "Number is greater than 10" << endl;
    }
    
    // If-else
    if (number % 2 == 0) {
        cout << "Number is even" << endl;
    } else {
        cout << "Number is odd" << endl;
    }
    
    // Switch statement
    switch (number) {
        case 10:
            cout << "Number is 10" << endl;
            break;
        case 15:
            cout << "Number is 15" << endl;
            break;
        default:
            cout << "Number is something else" << endl;
    }
    
    return 0;
}`
  },
  {
    title: "5. Loops",
    code: `#include <iostream>
using namespace std;

int main() {
    // For loop
    cout << "For loop: ";
    for (int i = 1; i <= 5; i++) {
        cout << i << " ";
    }
    cout << endl;
    
    // While loop
    cout << "While loop: ";
    int j = 1;
    while (j <= 5) {
        cout << j << " ";
        j++;
    }
    cout << endl;
    
    // Do-while loop
    cout << "Do-while loop: ";
    int k = 1;
    do {
        cout << k << " ";
        k++;
    } while (k <= 5);
    cout << endl;
    
    return 0;
}`
  },
  {
    title: "6. Arrays",
    code: `#include <iostream>
using namespace std;

int main() {
    // 1D Array
    int numbers[5] = {1, 2, 3, 4, 5};
    
    cout << "1D Array: ";
    for (int i = 0; i < 5; i++) {
        cout << numbers[i] << " ";
    }
    cout << endl;
    
    // 2D Array
    int matrix[2][3] = {{1, 2, 3}, {4, 5, 6}};
    
    cout << "2D Array:" << endl;
    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 3; j++) {
            cout << matrix[i][j] << " ";
        }
        cout << endl;
    }
    
    return 0;
}`
  },
  {
    title: "7. Functions",
    code: `#include <iostream>
using namespace std;

// Function declaration
int add(int a, int b);
void printMessage(string message);

// Function with default parameters
int multiply(int a, int b = 1) {
    return a * b;
}

// Function overloading
int add(int a, int b) {
    return a + b;
}

double add(double a, double b) {
    return a + b;
}

void printMessage(string message) {
    cout << "Message: " << message << endl;
}

int main() {
    cout << "Add integers: " << add(5, 3) << endl;
    cout << "Add doubles: " << add(5.5, 3.3) << endl;
    cout << "Multiply: " << multiply(4) << endl;
    printMessage("Hello from function!");
    
    return 0;
}`
  },
  {
    title: "8. References and Pointers",
    code: `#include <iostream>
using namespace std;

int main() {
    int number = 42;
    
    // Reference
    int& ref = number;
    ref = 100;
    cout << "Number: " << number << endl; // 100
    
    // Pointer
    int* ptr = &number;
    *ptr = 200;
    cout << "Number: " << number << endl; // 200
    
    // Pointer arithmetic
    int arr[] = {1, 2, 3, 4, 5};
    int* arrPtr = arr;
    
    cout << "Array via pointer: ";
    for (int i = 0; i < 5; i++) {
        cout << *(arrPtr + i) << " ";
    }
    cout << endl;
    
    // Null pointer
    int* nullPtr = nullptr;
    if (nullPtr == nullptr) {
        cout << "Pointer is null" << endl;
    }
    
    return 0;
}`
  },
  {
    title: "9. Dynamic Memory",
    code: `#include <iostream>
using namespace std;

int main() {
    // Dynamic allocation
    int* ptr = new int;
    *ptr = 42;
    cout << "Dynamic value: " << *ptr << endl;
    delete ptr;
    
    // Dynamic array
    int* arr = new int[5];
    for (int i = 0; i < 5; i++) {
        arr[i] = i + 1;
    }
    
    cout << "Dynamic array: ";
    for (int i = 0; i < 5; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
    
    delete[] arr;
    
    // Smart pointers (C++11)
    #include <memory>
    unique_ptr<int> smartPtr = make_unique<int>(100);
    cout << "Smart pointer value: " << *smartPtr << endl;
    
    return 0;
}`
  },
  {
    title: "10. Classes and Objects",
    code: `#include <iostream>
#include <string>
using namespace std;

class Person {
private:
    string name;
    int age;
    
public:
    // Constructor
    Person(string n, int a) : name(n), age(a) {}
    
    // Getter methods
    string getName() { return name; }
    int getAge() { return age; }
    
    // Setter methods
    void setName(string n) { name = n; }
    void setAge(int a) { age = a; }
    
    // Member function
    void display() {
        cout << "Name: " << name << ", Age: " << age << endl;
    }
};

int main() {
    Person person("John", 25);
    person.display();
    
    person.setAge(26);
    person.display();
    
    return 0;
}`
  },
  {
    title: "11. Inheritance",
    code: `#include <iostream>
#include <string>
using namespace std;

class Animal {
protected:
    string name;
    
public:
    Animal(string n) : name(n) {}
    
    virtual void makeSound() {
        cout << "Some animal sound" << endl;
    }
    
    void display() {
        cout << "Name: " << name << endl;
    }
};

class Dog : public Animal {
public:
    Dog(string n) : Animal(n) {}
    
    void makeSound() override {
        cout << name << " says: Woof!" << endl;
    }
};

class Cat : public Animal {
public:
    Cat(string n) : Animal(n) {}
    
    void makeSound() override {
        cout << name << " says: Meow!" << endl;
    }
};

int main() {
    Dog dog("Buddy");
    Cat cat("Whiskers");
    
    dog.display();
    dog.makeSound();
    
    cat.display();
    cat.makeSound();
    
    return 0;
}`
  },
  {
    title: "12. Templates",
    code: `#include <iostream>
using namespace std;

// Function template
template<typename T>
T add(T a, T b) {
    return a + b;
}

// Class template
template<typename T>
class Container {
private:
    T data;
    
public:
    Container(T value) : data(value) {}
    
    T getValue() { return data; }
    void setValue(T value) { data = value; }
    
    void display() {
        cout << "Value: " << data << endl;
    }
};

// Template specialization
template<>
class Container<string> {
private:
    string data;
    
public:
    Container(string value) : data(value) {}
    
    void display() {
        cout << "String value: " << data << endl;
    }
};

int main() {
    cout << "Add ints: " << add(5, 3) << endl;
    cout << "Add doubles: " << add(5.5, 3.3) << endl;
    
    Container<int> intContainer(42);
    intContainer.display();
    
    Container<string> stringContainer("Hello");
    stringContainer.display();
    
    return 0;
}`
  },
  {
    title: "13. Exception Handling",
    code: `#include <iostream>
#include <stdexcept>
using namespace std;

class CustomException : public exception {
public:
    const char* what() const noexcept override {
        return "Custom exception occurred";
    }
};

int divide(int a, int b) {
    if (b == 0) {
        throw runtime_error("Division by zero");
    }
    return a / b;
}

void processNumber(int num) {
    if (num < 0) {
        throw CustomException();
    }
    cout << "Processing: " << num << endl;
}

int main() {
    try {
        int result = divide(10, 2);
        cout << "Result: " << result << endl;
        
        result = divide(10, 0); // This will throw
    }
    catch (const runtime_error& e) {
        cout << "Runtime error: " << e.what() << endl;
    }
    catch (const CustomException& e) {
        cout << "Custom error: " << e.what() << endl;
    }
    catch (...) {
        cout << "Unknown error occurred" << endl;
    }
    
    return 0;
}`
  },
  {
    title: "14. File Handling",
    code: `#include <iostream>
#include <fstream>
#include <string>
using namespace std;

int main() {
    // Writing to file
    ofstream outFile("test.txt");
    if (outFile.is_open()) {
        outFile << "Hello, File!" << endl;
        outFile << "This is a test file." << endl;
        outFile.close();
        cout << "File written successfully" << endl;
    }
    
    // Reading from file
    ifstream inFile("test.txt");
    string line;
    
    if (inFile.is_open()) {
        cout << "File contents:" << endl;
        while (getline(inFile, line)) {
            cout << line << endl;
        }
        inFile.close();
    }
    
    // Binary file operations
    ofstream binFile("data.bin", ios::binary);
    int numbers[] = {1, 2, 3, 4, 5};
    binFile.write(reinterpret_cast<char*>(numbers), sizeof(numbers));
    binFile.close();
    
    return 0;
}`
  },
  {
    title: "15. STL Containers",
    code: `#include <iostream>
#include <vector>
#include <list>
#include <map>
#include <set>
using namespace std;

int main() {
    // Vector
    vector<int> vec = {1, 2, 3, 4, 5};
    vec.push_back(6);
    
    cout << "Vector: ";
    for (int num : vec) {
        cout << num << " ";
    }
    cout << endl;
    
    // List
    list<string> names = {"John", "Jane", "Bob"};
    names.push_back("Alice");
    
    cout << "List: ";
    for (const string& name : names) {
        cout << name << " ";
    }
    cout << endl;
    
    // Map
    map<string, int> scores;
    scores["John"] = 85;
    scores["Jane"] = 92;
    scores["Bob"] = 78;
    
    cout << "Map:" << endl;
    for (const auto& pair : scores) {
        cout << pair.first << ": " << pair.second << endl;
    }
    
    // Set
    set<int> uniqueNumbers = {3, 1, 4, 1, 5, 9, 2, 6};
    
    cout << "Set: ";
    for (int num : uniqueNumbers) {
        cout << num << " ";
    }
    cout << endl;
    
    return 0;
}`
  },
  {
    title: "16. Lambda Expressions",
    code: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    vector<int> numbers = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
    
    // Lambda with capture
    int multiplier = 2;
    auto multiply = [multiplier](int x) { return x * multiplier; };
    
    cout << "Original: ";
    for (int num : numbers) {
        cout << num << " ";
    }
    cout << endl;
    
    cout << "Multiplied by " << multiplier << ": ";
    for (int num : numbers) {
        cout << multiply(num) << " ";
    }
    cout << endl;
    
    // Lambda with for_each
    cout << "Even numbers: ";
    for_each(numbers.begin(), numbers.end(), [](int x) {
        if (x % 2 == 0) {
            cout << x << " ";
        }
    });
    cout << endl;
    
    // Lambda with capture by reference
    int sum = 0;
    for_each(numbers.begin(), numbers.end(), [&sum](int x) {
        sum += x;
    });
    cout << "Sum: " << sum << endl;
    
    return 0;
}`
  },
  {
    title: "17. Namespaces",
    code: `#include <iostream>
using namespace std;

// Custom namespace
namespace Math {
    const double PI = 3.14159;
    
    int add(int a, int b) {
        return a + b;
    }
    
    int subtract(int a, int b) {
        return a - b;
    }
    
    namespace Advanced {
        double power(double base, int exponent) {
            double result = 1.0;
            for (int i = 0; i < exponent; i++) {
                result *= base;
            }
            return result;
        }
    }
}

// Using namespace
using namespace Math;

int main() {
    cout << "PI: " << Math::PI << endl;
    cout << "Add: " << add(5, 3) << endl;
    cout << "Subtract: " << subtract(10, 4) << endl;
    cout << "Power: " << Advanced::power(2, 3) << endl;
    
    // Using alias
    namespace M = Math;
    cout << "Using alias: " << M::add(2, 3) << endl;
    
    return 0;
}`
  },
  {
    title: "18. Operator Overloading",
    code: `#include <iostream>
using namespace std;

class Complex {
private:
    double real, imag;
    
public:
    Complex(double r = 0, double i = 0) : real(r), imag(i) {}
    
    // Overload + operator
    Complex operator+(const Complex& other) const {
        return Complex(real + other.real, imag + other.imag);
    }
    
    // Overload - operator
    Complex operator-(const Complex& other) const {
        return Complex(real - other.real, imag - other.imag);
    }
    
    // Overload << operator for output
    friend ostream& operator<<(ostream& os, const Complex& c) {
        os << c.real;
        if (c.imag >= 0) os << "+";
        os << c.imag << "i";
        return os;
    }
    
    // Overload == operator
    bool operator==(const Complex& other) const {
        return real == other.real && imag == other.imag;
    }
    
    // Overload [] operator
    double operator[](int index) const {
        if (index == 0) return real;
        if (index == 1) return imag;
        throw out_of_range("Index out of range");
    }
};

int main() {
    Complex c1(3, 4);
    Complex c2(1, 2);
    
    Complex sum = c1 + c2;
    Complex diff = c1 - c2;
    
    cout << "c1: " << c1 << endl;
    cout << "c2: " << c2 << endl;
    cout << "Sum: " << sum << endl;
    cout << "Difference: " << diff << endl;
    cout << "c1[0]: " << c1[0] << endl;
    cout << "c1[1]: " << c1[1] << endl;
    
    return 0;
}`
  },
  {
    title: "19. Smart Pointers",
    code: `#include <iostream>
#include <memory>
using namespace std;

class Resource {
public:
    Resource() { cout << "Resource created" << endl; }
    ~Resource() { cout << "Resource destroyed" << endl; }
    
    void use() { cout << "Resource being used" << endl; }
};

// Unique pointer
void uniquePointerExample() {
    unique_ptr<Resource> ptr1 = make_unique<Resource>();
    ptr1->use();
    
    // Transfer ownership
    unique_ptr<Resource> ptr2 = move(ptr1);
    if (!ptr1) {
        cout << "ptr1 is now null" << endl;
    }
}

// Shared pointer
void sharedPointerExample() {
    shared_ptr<Resource> ptr1 = make_shared<Resource>();
    {
        shared_ptr<Resource> ptr2 = ptr1;
        cout << "Reference count: " << ptr1.use_count() << endl;
    }
    cout << "Reference count: " << ptr1.use_count() << endl;
}

// Weak pointer
void weakPointerExample() {
    shared_ptr<Resource> shared = make_shared<Resource>();
    weak_ptr<Resource> weak = shared;
    
    if (auto locked = weak.lock()) {
        cout << "Weak pointer locked successfully" << endl;
        locked->use();
    }
}

int main() {
    cout << "=== Unique Pointer ===" << endl;
    uniquePointerExample();
    
    cout << "\\n=== Shared Pointer ===" << endl;
    sharedPointerExample();
    
    cout << "\\n=== Weak Pointer ===" << endl;
    weakPointerExample();
    
    return 0;
}`
  },
  {
    title: "20. Threading",
    code: `#include <iostream>
#include <thread>
#include <mutex>
#include <chrono>
#include <vector>
using namespace std;

mutex mtx;

void printMessage(string message, int count) {
    for (int i = 0; i < count; i++) {
        lock_guard<mutex> lock(mtx);
        cout << message << " " << i + 1 << endl;
        this_thread::sleep_for(chrono::milliseconds(100));
    }
}

void workerFunction(int id) {
    lock_guard<mutex> lock(mtx);
    cout << "Worker " << id << " started" << endl;
    this_thread::sleep_for(chrono::milliseconds(1000));
    cout << "Worker " << id << " finished" << endl;
}

int main() {
    cout << "=== Thread Example ===" << endl;
    
    // Create threads
    thread t1(printMessage, "Thread 1", 3);
    thread t2(printMessage, "Thread 2", 3);
    
    // Wait for threads to finish
    t1.join();
    t2.join();
    
    cout << "\\n=== Multiple Workers ===" << endl;
    
    vector<thread> workers;
    for (int i = 1; i <= 5; i++) {
        workers.emplace_back(workerFunction, i);
    }
    
    for (auto& worker : workers) {
        worker.join();
    }
    
    cout << "All threads completed!" << endl;
    
    return 0;
}`
  }
];

function CheatSheetCpp() {
  return <CheatSheetLayout title="C++ Cheat Sheets" cheats={cppCheats} />;
}

export default CheatSheetCpp; 