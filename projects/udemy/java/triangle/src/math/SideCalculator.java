package math;

public class SideCalculator {
	
	public static void whichTriangle(int random1, int random2, int random3)
	{
		if (random1 == random2 || random1 == random2 || random2 == random3)
		{
			System.out.println("This is an isoscelse triangle");
		}
		else if (random1 == random2 && random2 == random3)
		{
			System.out.println("This is an equilateral triangle");
		}
		else 
		{
			System.out.println("This is a scalene triangle");
		}
	}
	
}
