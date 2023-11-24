package com.br.etec.sp.etec.AdotaLp.repository.projections;

public class AnimalDTO {

    private Integer id;
    private String nomeanimal;
    private String sexo;
    private String idade;
    private String porte;
    private String foto;
    //FK's
    private String nomecidade;

    public AnimalDTO(Integer id, String nomeanimal, String sexo, String idade, String porte, String foto, String nomecidade) {
        this.id = id;
        this.nomeanimal = nomeanimal;
        this.sexo = sexo;
        this.idade = idade;
        this.porte = porte;
        this.foto = foto;
        this.nomecidade = nomecidade;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNomeanimal() {
        return nomeanimal;
    }

    public void setNomeanimal(String nomeanimal) {
        this.nomeanimal = nomeanimal;
    }

    public String getSexo() {
        return sexo;
    }

    public void setSexo(String sexo) {
        this.sexo = sexo;
    }

    public String getIdade() {
        return idade;
    }

    public void setIdade(String idade) {
        this.idade = idade;
    }

    public String getPorte() {
        return porte;
    }

    public void setPorte(String porte) {
        this.porte = porte;
    }

    public String getFoto() {
        return foto;
    }

    public void setFoto(String foto) {
        this.foto = foto;
    }

    public String getNomecidade() {
        return nomecidade;
    }

    public void setNomecidade(String nomecidade) {
        this.nomecidade = nomecidade;
    }
}
