package design_patterns.creational.abstract_factory;

import design_patterns.creational.abstract_factory.banking.BankingTeamFactory;
import design_patterns.creational.abstract_factory.website.WebsiteTeamFactory;

public class Project {

  public static void main(String[] args) {
    {
      ProjectTeamFactory projectTeamFactory = new BankingTeamFactory();
      Developer developer = projectTeamFactory.getDeveloper();
      Tester tester = projectTeamFactory.getTester();
      ProjectManager projectManager = projectTeamFactory.getProjectManager();

      System.out.println("Creating banking system...");
      developer.writeCode();
      tester.testCode();
      projectManager.manageProject();
    }

    System.out.println("==================================================");

    {
      ProjectTeamFactory projectTeamFactory = new WebsiteTeamFactory();
      Developer developer = projectTeamFactory.getDeveloper();
      Tester tester = projectTeamFactory.getTester();
      ProjectManager projectManager = projectTeamFactory.getProjectManager();

      System.out.println("Creating Website system...");
      developer.writeCode();
      tester.testCode();
      projectManager.manageProject();
    }
  }
}
