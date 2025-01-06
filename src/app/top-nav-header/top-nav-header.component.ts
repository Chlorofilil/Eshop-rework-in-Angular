import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SearchbarComponent } from "../searchbar/searchbar.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-top-nav-header',
  standalone: true,
  imports: [CommonModule, RouterLink, SearchbarComponent, RouterModule],
  templateUrl: './top-nav-header.component.html',
  styleUrls: ['./top-nav-header.component.css']
})
export class TopNavHeaderComponent implements OnInit {
  // INPUTS FOR CONTROL WIDTH REACTIVITY
  @Input() isLargeScreen: boolean = false;
  @Input() isMediumScreen: boolean = false;
  @Input() isSmallScreen: boolean = false;

  // OBJECT FOR TOP-HEADER_ROW ONW AND ROW TWO
  mainCategory = [
    {
      routelink: 'all',
      label: 'All',
      subcategories: [
        { routelink: 'new-arrivals', label: 'New Arrivals' },
        { routelink: 'sale', label: 'Sale' },
        { routelink: 'band-merch', label: 'Band Merch' },
        { routelink: 'brands', label: 'Brands' },
        { routelink: 'entertainment', label: 'Entertainment' },
        { routelink: 'lifestyle', label: 'LifeStyle' },
      ]
    },
    {
      routelink: 'woman',
      label: 'Woman',
      subcategories: [
        { routelink: 'clothing', label: 'Clothing' },
        { routelink: 'accessories', label: 'Accessories' },
        { routelink: 'jewellery', label: 'Jewellery' },
        { routelink: 'shoes', label: 'Shoes' },
        { routelink: 'fun', label: 'Fun products' },
        { routelink: 'plus', label: 'Plus size' },
        { routelink: 'topbrands', label: 'Top Brands' },
        { routelink: 'empbrands', label: 'Brands by EMP' },
        { routelink: 'topics', label: 'Topics' },
        { routelink: 'young', label: 'Young Rebels' },
      ]
    },
    {
      routelink: 'man',
      label: 'Man',
      subcategories: [
        { routelink: 'clothing', label: 'Clothing' },
        { routelink: 'accessories', label: 'Accessories' },
        { routelink: 'jewellery', label: 'Jewellery' },
        { routelink: 'shoes', label: 'Shoes' },
        { routelink: 'fun', label: 'Fun products' },
        { routelink: 'plus', label: 'Plus size' },
        { routelink: 'topbrands', label: 'Top Brands' },
        { routelink: 'empbrands', label: 'Brands by EMP' },
        { routelink: 'topics', label: 'Topics' },
        { routelink: 'young', label: 'Young Rebels' },
      ]
    },
    {
      routelink: 'child',
      label: 'Child',
      subcategories: [
        { routelink: 'babies', label: 'Babies' },
        { routelink: 'kids', label: 'Kids' },
        { routelink: 'teens', label: 'Teens' },
        { routelink: 'topbrands', label: 'Top Bands' },
        { routelink: 'girls', label: 'Girls' },
        { routelink: 'boys', label: 'Boys' },
        { routelink: 'highlights', label: 'Highlights' },
      ]
    }
  ];

  activeCategory: string = 'All';
  isLogInActive: any;

  setActiveCategory(category: string): void {
    this.activeCategory = category;
  }

  constructor() {}

  ngOnInit(): void {
  }
}
