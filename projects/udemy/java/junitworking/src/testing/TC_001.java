package testing;

import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Ignore;
import org.junit.Test;

public class TC_001 {
	
	@BeforeClass
	public static void bclass()
	{
		System.out.println("Before Class");
	}
	
	@AfterClass
	public static void aclass()
	{
		System.out.println("After Class");
	}
	
	@Before
	public void bemet()
	{
		System.out.println("Open browser");
	}
	
	@Test
	public void mymet1()
	{
		System.out.println("This is for testcase code 1");
	}
	
	@Test
	public void mymet2()
	{
		System.out.println("This is for testcase code 2");
	}
	
	@After
	public void aftermethod()
	{
		System.out.println("Close browser");
	}

}
