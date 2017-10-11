package design_patterns.creational.singleton;

public class ProjectLogger {

  private static ProjectLogger instance;
  private static String logFile = "This is log file. \n";

  public static synchronized ProjectLogger getInstance() {
    if (instance == null) {
      instance = new ProjectLogger();
    }

    return instance;
  }

  private ProjectLogger() {
  }

  public void addLogInfo(String logInfo) {
    logFile += logInfo + "\n";
  }

  public void showLogFile() {
    System.out.println(logFile);
  }
}
