package design_patterns.creational.abstract_factory.website;

import design_patterns.creational.abstract_factory.Developer;
import design_patterns.creational.abstract_factory.ProjectManager;
import design_patterns.creational.abstract_factory.ProjectTeamFactory;
import design_patterns.creational.abstract_factory.Tester;

public class WebsiteTeamFactory implements ProjectTeamFactory {

  @Override
  public Developer getDeveloper() {
    return new WebsiteDeveloper();
  }

  @Override
  public Tester getTester() {
    return new WebsiteTester();
  }

  @Override
  public ProjectManager getProjectManager() {
    return new WebsiteProjectManager();
  }
}
