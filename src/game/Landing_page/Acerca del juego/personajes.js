var characterIndex = 0;
var characters = [
    { 
        image: '/assets/personajes/1_luz.jpg', 
        name: 'Elfo Guardián',
        side: 'Defensor de la Luz',
        description: 'Desplegable en el campo de batalla, el Elfo Guardián se erige como una sólida opción defensiva. Aunque su velocidad no es su mayor virtud, demuestra una notable capacidad para enfrentar a los Seguidores de las Sombras.'
    },
    { 
        image: '/assets/personajes/2_luz.jpg', 
        name: 'Duende Explorador',
        side: 'Defensor de la luz',
        description: 'Con una velocidad sobresaliente, el Duende Explorador destaca por su capacidad para conquistar el Campamento de las Sombras. Aunque su destreza en combate es limitada, su espíritu para explorar es insaciable.'
    },
    { 
        image: '/assets/personajes/3_luz.jpg', 
        name: 'Hada de runas',
        side: 'Defensor de la Luz',
        description: 'Esta hada debe ser desplegada en la reserva de recursos del Castillo Antiguo y su función es generar elixir para la creación de tótems en el campo de batalla.'
    },
    { 
        image: '/assets/personajes/4_luz.jpg', 
        name: 'Dragón Solar',
        side: 'Defensor de la Luz',
        description: 'Emitiendo bolas de fuego sagrado, el Dragón Solar causa daño continuo a los enemigos. Este símbolo de la luz y el poder celestial despliega su fuego divino sobre las tropas enemigas.'
    },
    { 
        image: '/assets/personajes/1_sombra.jpg', 
        name: 'Asesino Nocturno',
        side: 'Seguidor de las Sombras',
        description: 'Nadie sabe con certeza qué es, pero el Asesino Nocturno demuestra una destreza deseada por muchos. Posee gran velocidad y agilidad para destruir al oponente, convirtiéndose en un temido adversario.'
    },
    { 
        image: '/assets/personajes/2_sombra.jpg', 
        name: 'Bruja Maléfica',
        side: 'Seguidor de las Sombras',
        description: 'Conjurando maldiciones ancestrales sobre los enemigos, la Bruja Maléfica debilita a sus oponentes con su oscura magia.'
    },
    { 
        image: '/assets/personajes/3_sombra.jpg', 
        name: 'Gólem de Sombras',
        side: 'Seguidor de las Sombras',
        description: 'Creado a partir de la misma oscuridad, el Gólem de Sombras libera una onda de destrucción imparable sobre los enemigos para defender el campamento.'
    },
    { 
        image: '/assets/personajes/4_sombra.jpg', 
        name: 'Minero de las Profundidades',
        side: 'Seguidor de las sombras',
        description: 'Este minero debe desplegarse en las minas de Cristal, donde puede generar elixir a medida que avanza la partida.'
    }
];

function nextCharacter() {
    characterIndex = (characterIndex + 1) % characters.length;
    updateCharacterInfo();
}

function updateCharacterInfo() {
    var character = characters[characterIndex];
    document.getElementById('characterImage').src = character.image;
    document.getElementById('characterName').textContent = character.name;
    document.getElementById('characterSide').textContent = character.side;
    document.getElementById('characterDescription').textContent = character.description;
}

// Load initial character info on page load
window.onload = function() {
    updateCharacterInfo();
};