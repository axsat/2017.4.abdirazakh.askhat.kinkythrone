package design_patterns.creational.prototype;

public class Project {

  public static void main(String[] args) {
    Website websiteMaster = new Website(1L, "Facebook", "Facebook fb = new Facebook();");
    System.out.println(websiteMaster + ", HashCode = " + websiteMaster.hashCode());

    Website websiteCopy = websiteMaster.copy();
    System.out.println(websiteCopy + ", HashCode = " + websiteCopy.hashCode());
  }
}
