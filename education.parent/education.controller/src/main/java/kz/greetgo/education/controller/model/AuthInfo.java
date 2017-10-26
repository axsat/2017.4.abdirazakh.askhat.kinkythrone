package kz.greetgo.education.controller.model;

public class AuthInfo {
    String role;
    String tokenId;
    boolean check;

    public AuthInfo(){}

    public AuthInfo(String role, String tokenId, boolean check) {
        this.role = role;
        this.tokenId = tokenId;
        this.check = check;
    }
}
