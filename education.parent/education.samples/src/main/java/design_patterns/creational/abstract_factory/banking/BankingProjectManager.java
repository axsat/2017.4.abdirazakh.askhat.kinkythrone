package design_patterns.creational.abstract_factory.banking;

import design_patterns.creational.abstract_factory.ProjectManager;

public class BankingProjectManager implements ProjectManager {

  @Override
  public void manageProject() {
    System.out.println("Banking project manager manages Banking project...");
  }
}
