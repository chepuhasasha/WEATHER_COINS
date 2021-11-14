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
        target.list = [
          am4core.color('white').lighten(-0.7),
          am4core.color('yellow'),
        ];
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
    chart.logo.disabled = true;
    chart.paddingLeft = 0;
    chart.paddingRight = 0;
    chart.paddingBottom = 0;
    chart.paddingRight = 10;

    const data = [];
    let visits = 10;
    for (let i = 1; i < 366; i += 1) {
      visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
      data.push({ date: new Date(2018, 0, i), name: `name${i}`, value: visits });
    }

    chart.data = data;

    const dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;
    dateAxis.renderer.minGridDistance = 40;
    dateAxis.renderer.fontSize = 12;
    // dateAxis.timezone = 'UTC';
    dateAxis.tooltip.background.fill = am4core.color('rgb(20, 20, 20)');
    dateAxis.tooltip.background.cornerRadius = 3;
    dateAxis.tooltip.label.fill = am4core.color('#BEBFC3');
    dateAxis.tooltip.label.fontSize = 10;

    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.minWidth = 35;
    valueAxis.renderer.fontSize = 12;

    const series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.dateX = 'date';
    series.background.fill = chart.colors.getIndex(1);
    series.dataFields.valueY = 'value';
    series.tooltip.background.stroke = am4core.color('yellow');

    const seriesRange = dateAxis.createSeriesRange(series);
    seriesRange.contents.strokeDasharray = '10,2';
    seriesRange.contents.stroke = chart.colors.getIndex(1);
    seriesRange.contents.strokeWidth = 1;

    const pattern = new am4core.LinePattern();
    pattern.rotation = -45;
    pattern.stroke = seriesRange.contents.stroke;
    pattern.width = 500;
    pattern.height = 500;
    pattern.gap = 5;
    seriesRange.contents.fill = pattern;
    seriesRange.contents.fillOpacity = 0.5;

    const range = dateAxis.axisRanges.push(new am4charts.DateAxisDataItem());
    range.grid.stroke = chart.colors.getIndex(1);
    range.grid.strokeOpacity = 1;
    range.bullet = new am4core.ResizeButton();
    range.bullet.background.fill = chart.colors.getIndex(1);
    range.bullet.background.states.copyFrom(chart.zoomOutButton.background.states);
    range.bullet.minX = 0;
    range.bullet.adapter.add('minY', (minY, target) => {
      // eslint-disable-next-line no-param-reassign
      target.maxY = chart.plotContainer.maxHeight;
      // eslint-disable-next-line no-param-reassign
      target.maxX = chart.plotContainer.maxWidth;
      return chart.plotContainer.maxHeight;
    });

    const firstTime = chart.data[0].date.getTime();
    const lastTime = chart.data[chart.data.length - 1].date.getTime();
    const date = new Date(firstTime + (lastTime - firstTime) / 1.2);

    range.date = date;

    seriesRange.date = date;
    seriesRange.endDate = chart.data[chart.data.length - 1].date;

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
