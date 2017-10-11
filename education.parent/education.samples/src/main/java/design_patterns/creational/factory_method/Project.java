package design_patterns.creational.factory_method;

public class Project {

  public static void main(String[] args) {
    Developer developer = DeveloperFactory.getDeveloperByProgrammingLanguage(ProgrammingLanguageType.PHP);
    developer.writeCode();
  }
}
