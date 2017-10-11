package design_patterns.creational.abstract_factory.website;

import design_patterns.creational.abstract_factory.ProjectManager;

public class WebsiteProjectManager implements ProjectManager {

  @Override
  public void manageProject() {
    System.out.println("Website project manager manages Website project...");
  }
}
