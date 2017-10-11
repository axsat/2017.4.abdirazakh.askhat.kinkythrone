package design_patterns.creational.abstract_factory.website;

import design_patterns.creational.abstract_factory.Developer;

public class WebsiteDeveloper implements Developer {

  @Override
  public void writeCode() {
    System.out.println("Website developer writes Website project code...");
  }
}
