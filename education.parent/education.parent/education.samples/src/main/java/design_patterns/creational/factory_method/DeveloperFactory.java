package design_patterns.creational.factory_method;

public class DeveloperFactory {

  public static Developer getDeveloperByProgrammingLanguage(ProgrammingLanguageType programmingLanguageType) {
    switch (programmingLanguageType) {
      case JAVA:
        return new JavaDeveloper();
      case CPP:
        return new CppDeveloper();
      case PHP:
        return new PhpDeveloper();
      default:
        throw new IllegalArgumentException("No developer for " + programmingLanguageType);
    }
  }
}
