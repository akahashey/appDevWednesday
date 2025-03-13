import java.util.Scanner;

public class GroupWork   {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
       System.out.println("\nCOLLABORATIVE CALCULATOR");
        System.out.println("Enter first number: ");
        int num1 = scanner.nextInt();
        System.out.print("Enter second number: ");
        int num2 = scanner.nextInt();
       
        // Calling methods from Calculator.java

        System.out.println("Sum: " + Calculator.multiple(num1, num2));  // Group 2's method

        System.out.println("subtract: " + Calculator.add(num1, num2));  // Group 2's method
        System.out.println("Quotient: " + Calculator.divide(num1, num2)); // Group 4's method


        //System.out.println("Are numbers equal? " + Calculator.isEqual(num1, num2));  // Group 10's method
        scanner.close();
    }
