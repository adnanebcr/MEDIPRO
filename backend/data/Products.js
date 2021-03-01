const Products = [
    {
         name:'DEPURATTIVA',
        type: 'Solution Buvable',
        metadesc:'produits-phares',
        image:'/products/apixol/ApixolAdsirop.png',
        fiche:'test122',
        gammes:'testgamme1',
        description:'desc1',
        proprietes:'prop1',
        conseil:'cons1',
        precautions:'prec1',
    },
    
    {
        name: 'APIXOL ®',
        type:'Solution buvable Adultes',
        metadesc: 'produits-phares',
        image: '/products/apixol/ApixolAdsirop.png',
          fiche:'test1',
        gammes: 'Gastro-entérologie',
        description: 'description APIXOL',
        proprietes: 'Apixol solution buvable est à base d\'extraits de plantes riches en actifs naturels qui agissent en synergie pour désencombrer les bronches en cas de toux grasse et apaiser l’irritation des voies respiratoires en cas de toux sèche tout en renforçant les défenses naturelles de l’organisme',
        conseil: 'Toux sèche,Toux grasse',
        precautions: 'cuillère à soupe 3 à 4 fois par jour.'
    },
    {
        name: 'ANSIOVIT ®',
        type: 'Comprimés',
        metadesc: '_',
        image: '/products/ansiovit/Ansiovit.png',
          fiche:'test1',
        gammes: 'Stress,Sommeil et anxieté',
        description: 'Ansiovit est composé d\'actifs naturels tels que la rhodiole et la passiflore qui aident à lutter naturellement contre l\'anxiété et à mieux résister au stress.',
        proprietes: 'Ansiovit est à base d\'extraits de Passiflore et de Scutellaire aux propriétés anxiolytiques et antistress.Ansiovit renferme aussi la Rhodiole qui procure un effet adaptogène permettant une meille adaptation au stress',
        conseil: 'Anxiété mineure/Stress/Troubles psychosomatiques (agitation, palpitations, spasmes digestifs..)',
        precautions: '1 comprimé  2 fois par jour',

    },
    {
        name: 'APENAT ®',
        type:'Comprimés',
        metadesc: '_',
        image: '/products/apenat/Apenatcb.png',
          fiche:'test1',
        gammes: 'Métabolisme et énérgie',
        description: 'description APENAT',
        proprietes: 'Apenat est un stimulant naturel de l\'appétit à base de Fenugrec(titré et standardisé en saponines et protéines végétales)  + 12 vitamines et minéraux à 100 % des Apports journaliers recommandés.Apenat stimule l\'appétit, favroise la prise de poids tout en procurant tonus et vitalité.',
        conseil: 'Manque ou Perte d\'appétit ,Amaigrissement,Dénutrition,Convalescence',
        precautions: 'à 2 comprimés par jour de préférence avant les principaux repas',

    },
   
    {
        name: 'APENAT ®',
        type: 'Solution buvable',
        metadesc: '_',
        image: '/products/apenat/apenatsirop.png',
          fiche:'test1',
        gammes: 'Métabolisme et énérgie',
        description: 'description APENAT',
        proprietes: 'Apenat est un stimulant naturel de l\'appétit à base de Fenugrec(titré et standardisé en saponines et protéines végétales)  + 12 vitamines et minéraux à 100 % des Apports journaliers recommandés.Apenat stimule l\'appétit, favroise la prise de poids tout en procurant tonus et vitalité.',
        conseil: 'Manque ou Perte d\'appétit ,Amaigrissement,Dénutrition,Convalescence',
        precautions: ' Enfants moins de 5 ans : 1/2 cuillère à café par jour.  De 5 à 12 ans : 1 cuillère à café par jour. Adultes : 2 cuillères à café par jour.',

    },
   
    {
        name: 'APIXOL ®',
        type:'Comprimé à sucer',
        metadesc: '_',
        image: '/products/apixol/apixolcpr.png',
          fiche:'test1',
        gammes: 'Gastro-entérologie',
        description: 'description APIXOL',
        proprietes: 'Apixol comprimé à sucer est un Dispositif médical à base d\'actifs naturels qui soulage les maux de gorge tout en protégeant la gorge grâce à un film mucco- adhésif.',
        conseil: 'Maux de gorge (irritation, douleur, difficulté à avaler).  Enrouement',
        precautions: '1 comprimé à sucer 3 fois par jour',
      
    },
    // {
    //     name: 'APIXOL ®',
    //     type:'Solution buvable Enfants',
    //     metadesc: 'produits-phares',
    //     image: '/produits-phares/Apixol.png',
    //     gammes: 'Gastro-entérologie',
    //     description: 'description APIXOL',
    //     proprietes: 'Apixol solution buvable est à base d\'extraits de plantes riches en actifs naturels qui agissent en synergie pour désencombrer les bronches en cas de toux grasse et apaiser l’irritation des voies respiratoires en cas de toux sèche tout en renforçant les défenses naturelles de l’organisme',
    //     conseil: 'Toux sèche,Toux grasse',
    //     precautions: '- Moins de 4 ans : 1 cuillère à café 3 fois par jour./De 4 à 12 ans : 1 cuillère à soupe 3 fois par jour',
  
    // },


    // {
    //     name: 'ZETALAX',
    //     type:'microlavement',
    //     fiche:'/Fiches/Gastro/Zetalax.jpg',
    //     metadesc: 'produits-phares',
    //     image: '/produits-phares/Zetalax.png',
    //     gammes: 'Gastro-entérologie',
    //     description: 'description APIXOL',
    //     proprietes: 'Zetalax est un laxatif sous forme de solution rectale. Zetalax  renferme un complexe glycérique végétal qui évacue les selles d’une manière rapide et efficace, grâce à une action lubrifiante et mécanique locale, qui respecte les processus physiologiques de défécation. Zetalax  renferme aussi des extraits de camomille et de mauve qui protègent et apaisent la région ano-rectale.Zetalax Dispositif médical ',
    //     conseil: 'Constipation occasionnelle.',
    //     precautions: 'Adulte et enfant de plus de 12 ans :1 à 2 microlavements par jour - par voie rectale.',

    // },
    // {
    //     name: 'MAXITONE',
    //     type:'comprimé effervescent',
    //     metadesc: 'produits-phares',
    //     image: '/produits-phares/Maxitone.png',
    //     gammes: 'Gastro-entérologie',
    //     description: 'description Maxitone',
    //     proprietes: 'Maxitone est un tonifiant général qui renferme des actifs naturels dont le maca, la L-arginine, le ginseng, la gelée royale, le ginkgo ainsi que d’autres phytoactifs.Cette composition synergique procure à Maxitone une double action énergétique et nutritive.Maxitone contribue aussi à augmenter les performances générales de l’organisme, à augmenter la résistance au stress physique et psychique et à renforcer l\'immunité grâce à sa teneur en vitamine C.',
    //     conseil: 'Fatigue physique, psychique ou sexuelle',
    //     precautions: '1 à 2 comprimés effervescents  par jour.',
 
    // },
   
]

export default Products
