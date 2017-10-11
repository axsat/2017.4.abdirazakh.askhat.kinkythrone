package design_patterns.creational.abstract_factory.banking;

import design_patterns.creational.abstract_factory.Developer;

public class BankingDeveloper implements Developer {

  @Override
  public void writeCode() {
    System.out.println("Banking developer writes Banking project code...");
  }
}
