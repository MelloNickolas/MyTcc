package com.br.etec.sp.etec.AdotaLp.resources;

import com.br.etec.sp.etec.AdotaLp.model.Animal;
import com.br.etec.sp.etec.AdotaLp.repository.AnimalRepository;
import com.br.etec.sp.etec.AdotaLp.repository.filter.AnimalFilter;
import com.br.etec.sp.etec.AdotaLp.repository.projections.AnimalDTO;
import com.br.etec.sp.etec.AdotaLp.service.AnimalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/api/animal")
@CrossOrigin("*")
public class AnimalResource {

    @Autowired
    private AnimalService animalService;
    @Autowired
    private AnimalRepository animalRepository;

    @PostMapping("/saveAnimal")
    public Animal saveAnimal(@RequestBody Animal animal){
        return animalService.saveAnimal(animal);
    }

    @PostMapping("/saveAllAnimal")
        public List<Animal> saveAllAnimal(@RequestBody List<Animal> animalList){
        return animalService.saveAllAnimal(animalList);
    }

    @GetMapping()
    public List<Animal> getAllAnimal() {
        return animalService.fetchAllAnimal();
    }

    @GetMapping("/filtro")
    public Page<AnimalDTO> pesquisar(AnimalFilter animalfilter, Pageable pageable){
        return animalRepository.Filtrar(animalfilter, pageable);
    }


    @GetMapping("/getAnimalById/{id}")
    public Optional<Animal> getAnimalDtails(@PathVariable int id){
        return animalService.fetchAnimalById(id);
    }

    @DeleteMapping("/deleteAnimalById/{id}")
    public void deleteAnimalById(@PathVariable int id){
        animalService.deleteAnimalById(id);
    }

    @DeleteMapping("/deleteAllAnimal")
    public void deleteAnimal(){
        animalService.deleteAllAnimal();
    }

    @PutMapping("updateAnimal/{id}")
    public Animal updateAnimalDetails(@RequestBody Animal animal){
        return animalService.updateAnimalDetails(animal);
    }
}
