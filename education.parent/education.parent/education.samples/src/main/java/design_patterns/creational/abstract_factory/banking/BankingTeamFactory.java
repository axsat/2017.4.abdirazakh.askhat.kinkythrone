package design_patterns.creational.abstract_factory.banking;

import design_patterns.creational.abstract_factory.Developer;
import design_patterns.creational.abstract_factory.ProjectManager;
import design_patterns.creational.abstract_factory.ProjectTeamFactory;
import design_patterns.creational.abstract_factory.Tester;

public class BankingTeamFactory implements ProjectTeamFactory {

  @Override
  public Developer getDeveloper() {
    return new BankingDeveloper();
  }

  @Override
  public Tester getTester() {
    return new BankingTester();
  }

  @Override
  public ProjectManager getProjectManager() {
    return new BankingProjectManager();
  }
}
