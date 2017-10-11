package design_patterns.creational.builder;

public class Project {

    public static void main(String[] args) {
        {
            Website website = Website.newBuilder()
                    .setName("Visit Card website")
                    .setType(CmsType.WORDPRESS)
                    .setPrice(5000).build();

            System.out.println(website.toString());
        }

        System.out.println("==================================================");

        {
            Website website = Website.newBuilder()
                    .setName("Enterprise website")
                    .setType(CmsType.ALIFRESCO)
                    .setPrice(10000)
                    .build();

            System.out.println(website.toString());
        }
    }
}
