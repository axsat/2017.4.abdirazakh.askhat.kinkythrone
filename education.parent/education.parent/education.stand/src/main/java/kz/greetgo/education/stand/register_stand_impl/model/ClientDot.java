package kz.greetgo.education.stand.register_stand_impl.model;

public class ClientDot {
    public String id;
    public String surname;
    public String name;
    public String patronymic;
    public Integer age;

    private ClientDot() {
        // private constructor
    }

    public static Builder newBuilder(){
        return new ClientDot().new Builder();
    }

    public class Builder{
        private Builder() {
            // private constructor
        }

        public Builder setId(String id){
            ClientDot.this.id=id;
            return this;
        }

        public Builder setSurname(String surname){
            ClientDot.this.surname=surname;
            return this;
        }

        public Builder setName(String name){
            ClientDot.this.name=name;
            return this;
        }

        public Builder setPatronymic(String patronymic){
            ClientDot.this.patronymic=patronymic;
            return this;
        }

        public Builder setAge(Integer age){
            ClientDot.this.age=age;
            return this;
        }

        public ClientDot build() {
            return ClientDot.this;
        }
    }
}
