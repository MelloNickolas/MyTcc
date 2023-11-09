package com.br.etec.sp.etec.AdotaLp.repository;

import com.br.etec.sp.etec.AdotaLp.model.AdotanteDoador;
import com.br.etec.sp.etec.AdotaLp.repository.adotantedoador.AdotanteDoadorRepositoryQuery;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdotanteDoadorRepository extends JpaRepository<AdotanteDoador, Integer>, AdotanteDoadorRepositoryQuery {
}
