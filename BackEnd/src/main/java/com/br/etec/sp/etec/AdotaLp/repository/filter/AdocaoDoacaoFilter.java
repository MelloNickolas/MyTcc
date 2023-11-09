package com.br.etec.sp.etec.AdotaLp.repository.filter;

import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;


public class AdocaoDoacaoFilter {

    @DateTimeFormat(pattern = "yyyy/MM/dd")
    private LocalDate dataadocao;
    private String nomeanimal;
    private String nomeadotante;
    private String nomedoador;


    public LocalDate getDataadocao() {
        return dataadocao;
    }

    public void setDataadocao(LocalDate dataadocao) {
        this.dataadocao = dataadocao;
    }

    public String getNomeanimal() {
        return nomeanimal;
    }

    public void setNomeanimal(String nomeanimal) {
        this.nomeanimal = nomeanimal;
    }


    public String getNomeadotante() {
        return nomeadotante;
    }

    public void setNomeadotante(String nomeadotante) {
        this.nomeadotante = nomeadotante;
    }

    public String getNomedoador() {
        return nomedoador;
    }

    public void setNomedoador(String nomedoador) {
        this.nomedoador = nomedoador;
    }

}
