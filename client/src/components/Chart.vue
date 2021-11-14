<template lang="pug">
  .chart(ref='chartdiv')
  </div>
</template>

<script>
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themesAnimated from '@amcharts/amcharts4/themes/animated';

am4core.useTheme(am4themesAnimated);

export default {
  name: 'Chart',
  methods: {
    theme(target) {
      if (target instanceof am4core.ColorSet) {
        // eslint-disable-next-line no-param-reassign
        target.list = [am4core.color('yellow')];
      }
      if (target instanceof am4core.InterfaceColorSet) {
        target.setFor('fill', am4core.color('#yellow'));
        target.setFor('primaryButton', am4core.color('#000'));
        target.setFor('primaryButtonActive', am4core.color('#yellow'));
        target.setFor('primaryButtonHover', am4core.color('#yellow'));
        target.setFor('grid', am4core.color('#fff').lighten(-0.4));
        target.setFor('alternativeBackground', am4core.color('#yellow'));
        target.setFor('text', am4core.color('#fff').lighten(-0.7));
      }
    },
  },
  mounted() {
    am4core.useTheme(this.theme);
    const chart = am4core.create(this.$refs.chartdiv, am4charts.XYChart);
    chart.logo.disabled = true;
    chart.paddingRight = 20;

    const data = [];
    let visits = 10;
    for (let i = 1; i < 366; i += 1) {
      visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
      data.push({ date: new Date(2018, 0, i), name: `name${i}`, value: visits });
    }

    chart.data = data;

    const dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;

    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.minWidth = 35;

    const series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.dateX = 'date';
    series.dataFields.valueY = 'value';

    series.tooltipText = '{valueY.value}';
    chart.cursor = new am4charts.XYCursor();

    this.chart = chart;
  },

  beforeDestroy() {
    if (this.chart) {
      this.chart.dispose();
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.chart {
  width: 100%;
  height: 100%;
}
</style>
