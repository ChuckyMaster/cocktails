import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../interface/cocktail.interface';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss'],
})
export class CocktailListComponent implements OnInit {
  cocktails: Cocktail[] = [
    {
      name: 'Mojito',
      img: 'https://uploads-ssl.webflow.com/603e7f3219462c686bd2bb29/606c5e094b1a0430208df955_mojito-passion-main.jpeg',
      description:
        'Dans un grand rempli de glaçons versez: 10 cl de Passoa passion, 5cl de sirop de sucre, 1/2 citron vert et de la menthe fraîche',
    },
    {
      name: 'Mai tai',
      img: 'https://uploads-ssl.webflow.com/603e7f3219462c686bd2bb29/606c5e094b1a0430208df955_mojito-passion-main.jpeg',
      description:
        'Dans un grand rempli de glaçons versez: 10 cl de Passoa passion, 5cl de sirop de sucre, 1/2 citron vert et de la menthe fraîche',
    },
    {
      name: 'Lait fraise petillant',
      img: 'https://uploads-ssl.webflow.com/603e7f3219462c686bd2bb29/606c5e094b1a0430208df955_mojito-passion-main.jpeg',
      description:
        'Dans un grand rempli de glaçons versez: 10 cl de Passoa passion, 5cl de sirop de sucre, 1/2 citron vert et de la menthe fraîche',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
