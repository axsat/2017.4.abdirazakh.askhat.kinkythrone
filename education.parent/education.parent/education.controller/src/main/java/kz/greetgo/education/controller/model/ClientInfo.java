package kz.greetgo.education.controller.model;

public class ClientInfo {
  public String id;
  public String surname;
  public String name;
  public String patronymic;
  public Integer age;

  public ClientInfo(){
    
  }
  
  public static Builder newBuilder(){
    return new ClientInfo().new Builder();
  }

  public class Builder{
    private Builder() {
      // private constructor
    }

    public Builder setId(String id){
      ClientInfo.this.id=id;
      return this;
    }

    public Builder setSurname(String surname){
      ClientInfo.this.surname=surname;
      return this;
    }

    public Builder setName(String name){
      ClientInfo.this.name=name;
      return this;
    }

    public Builder setPatronymic(String patronymic){
      ClientInfo.this.patronymic=patronymic;
      return this;
    }

    public Builder setAge(Integer age){
      ClientInfo.this.age=age;
      return this;
    }

    public ClientInfo build() {
      return ClientInfo.this;
    }
  }
}

