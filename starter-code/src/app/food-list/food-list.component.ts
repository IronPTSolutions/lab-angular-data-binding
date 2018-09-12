import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Array<Object> = foods;
  todayFoods: Array<Object> = [];
  todayCalories: number = 0;
  newFood: Object = {};
  pattern: string = '';
  showCreateForm: boolean = false;

  ngOnInit() {
  }

  toogleCreateForm(): void {
    this.showCreateForm = !this.showCreateForm;
  }

  addFood(): void {
    this.foods.push(this.newFood);
    this.newFood = {};
    this.showCreateForm = false;
  }

  addQuantity(food): void {
    food.quantity += 1;
  }

  addTodayFood(food, quantity: number): void {
    if (food.quantity > 0 && food.quantity >= quantity && quantity >= 0) {

      let todayFood = this.todayFoods.filter(item => item['name'] === food.name);

      if (todayFood.length === 0) {
        let newTodayFood = Object.assign({}, food);
        newTodayFood.quantity = 1;
        this.todayFoods.push(newTodayFood);
      } else {
        todayFood[0]['quantity'] += +quantity;
      }

      food.quantity -= quantity;
      this.todayCalories += food.calories;
    }
  }

  incrementQuantity(food): void {
    food.quantity += 1;
  }

  cloneFood(food): Object {
    let newFood = {}
    return Object.assign(newFood, food);
  }
}
