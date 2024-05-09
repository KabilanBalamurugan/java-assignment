class BiCycle{
	String name(){
		return "a vehicle with pedals.";
	}
}

class MotorCycle extends BiCycle{
	String name(){
		return "a cycle with an engine.";
	}
	
	MotorCycle(){
		System.out.println("Hello I am a motorcycle, I am "+ define_me());
     
		String temp=name();

		System.out.println("My ancestor is a cycle who is "+ temp );
	}
	
}
class cycle{
	public static void main(String []args){
		MotorCycle M=new MotorCycle();
	}
}
