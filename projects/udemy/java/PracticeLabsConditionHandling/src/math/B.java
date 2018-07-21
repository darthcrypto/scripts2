package math;

public class B {
	
	public static void big(int inputNumber1, int inputNumber2, int inputNumber3)
	
	{
		if (inputNumber1 > inputNumber2 && inputNumber1 > inputNumber3)
		{
			System.out.println("The Biggest Number is " + inputNumber1);
		}
		else if (inputNumber2 > inputNumber1 && inputNumber2 > inputNumber3)
		{
			System.out.println("The Biggest Number is " + inputNumber2);
		}
		else if (inputNumber3 > inputNumber1 && inputNumber3 > inputNumber2)
		{
			System.out.println("The Biggest Number is " + inputNumber3);
		}
	}
	
	

}
