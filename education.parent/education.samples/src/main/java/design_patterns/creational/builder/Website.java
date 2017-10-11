package design_patterns.creational.builder;

public class Website {

    private String name;
    private CmsType type;
    private int price;

    private Website() {}

    public static WebsiteBuilder newBuilder() {return new Website().new WebsiteBuilder();}

    public class WebsiteBuilder{
        private WebsiteBuilder(){}

        public WebsiteBuilder setName(String name) {
            Website.this.name = name;
            return this;
        }

        public WebsiteBuilder setType(CmsType type) {
            Website.this.type = type;
            return this;
        }

        public WebsiteBuilder setPrice(int price) {
            Website.this.price = price;
            return this;
        }

        public Website build() {
            return Website.this;
        }
    }

    @Override
    public String toString() {
        return "Website{" +
                "name='" + name + '\'' +
                ", type=" + type +
                ", price=" + price +
                '}';
    }
}
