import Component from '@glimmer/component';
import { action } from '@ember/object';
import { didInsert } from './ol';
import {
  Chart,
  Colors,
  BarController,
  CategoryScale,
  LinearScale,
  BarElement,
  Legend,
  Tooltip,
} from 'chart.js';

export default class Charts extends Component {
  constructor(owner, args) {
    super(owner, args);
    Chart.register(
      Colors,
      BarController,
      BarElement,
      CategoryScale,
      LinearScale,
      Legend,
      Tooltip,
    );
  }

  @action
  inserted(ele) {
    console.log('asd');
    const data = [
      { year: 2010, count: 10 },
      { year: 2011, count: 20 },
      { year: 2012, count: 15 },
      { year: 2013, count: 25 },
      { year: 2014, count: 22 },
      { year: 2015, count: 30 },
      { year: 2016, count: 28 },
    ];

    new Chart(ele, {
      type: 'bar',
      data: {
        labels: data.map((row) => row.year),
        datasets: [
          {
            label: 'Acquisitions by year',
            data: data.map((row) => row.count),
          },
        ],
      },
    });
  }

  <template>
    <h1>Canvas Charts</h1>
    <div id='charts'>
      <canvas {{didInsert onInsert=this.inserted}} />
    </div>
  </template>
}
