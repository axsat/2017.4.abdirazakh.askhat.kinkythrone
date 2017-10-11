package design_patterns.creational.singleton;

public class Project {

  public static void main(String[] args) {
    {
      System.out.println(ProjectLogger.getInstance().toString());
      System.out.println(ProjectLogger.getInstance().toString());
      System.out.println(ProjectLogger.getInstance().toString());
      System.out.println(ProjectLogger.getInstance().toString());
      System.out.println(ProjectLogger.getInstance().toString());
    }

    System.out.println("==================================================");

    {
      ProjectLogger.getInstance().addLogInfo("First log...");
      ProjectLogger.getInstance().addLogInfo("Second log...");
      ProjectLogger.getInstance().addLogInfo("Third log...");
      ProjectLogger.getInstance().showLogFile();
    }
  }
}
