package design_patterns.creational.prototype;

public class Website implements Copyable {

  private Long id;
  private String name;
  private String sourceCode;

  public Website(Long id, String name, String sourceCode) {
    this.id = id;
    this.name = name;
    this.sourceCode = sourceCode;
  }

  @Override
  public Website copy() {
    Website copy = new Website(id, name, sourceCode);
    return copy;
  }

  @Override
  public String toString() {
    return "Website{" +
        "id=" + id +
        ", name='" + name + '\'' +
        ", sourceCode='" + sourceCode + '\'' +
        '}';
  }
}
