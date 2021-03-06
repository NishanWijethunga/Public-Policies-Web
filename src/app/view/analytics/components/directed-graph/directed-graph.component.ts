import { Component, OnInit } from '@angular/core'
import * as d3 from 'd3'
import { dataSource } from './temp.data'
import { HomeService } from 'src/app/view/home/home.service'
import { FormGroup, FormControl } from '@angular/forms'
import { environment } from 'src/environments/environment'
declare var invalidation: any

export interface NodeGraphRequestData {
  random_encounters: string
  prob_communities: string
  initial_fraction_infected: string
  fraction_interacting: string
  p_infection: string
  p_contact: string
}

@Component({
  selector: 'app-directed-graph',
  templateUrl: './directed-graph.component.html',
  styleUrls: ['./directed-graph.component.scss']
})
export class DirectedGraphComponent implements OnInit {
  data = dataSource
  chartHeight = 680
  chartWidth = 680
  showTicks = false
  autoTicks = false
  tickInterval = 1
  formController: FormGroup
  constructor(private homeService: HomeService) {
    this.formController = new FormGroup({
      random_encounters: new FormControl(0),
      initial_fraction_infected: new FormControl(0),
      fraction_interacting: new FormControl(0),
      p_infection: new FormControl(0),
      p_contact: new FormControl(0),
      prob_communities_1: new FormControl(0),
      prob_communities_2: new FormControl(0),
      prob_communities_3: new FormControl(0),
      prob_communities_4: new FormControl(0),
      prob_communities_5: new FormControl(0),
      prob_communities_6: new FormControl(0)
    })
  }

  ngOnInit() {
    this.initGraph({ links: this.data.links, nodes: this.data.nodes })
    this.getGraphData()
  }

  removeNodeGraph() {
    document.querySelector('.node-graph-circle').remove()
    document.querySelector('.node-graph-lines').remove()
  }

  createGraph(data: { nodes: any; links: any }) {
    try {
      const links = data.links.map((d: any) => Object.create(d))
      const nodes = data.nodes.map((d: any) => Object.create(d))

      // console.log('links', links)
      // console.log('nodes', nodes)

      const color = (d: any) => {
        const scale = d3.scaleOrdinal(d3.schemeCategory10)(d)
        // return d3.scaleOrdinal(d3.schemeCategory10)(d)
        return '#781b4e'
      }

      const drag = (simulation: d3.Simulation<d3.SimulationNodeDatum, undefined>) => {
        function dragstarted(d: { fx: any; x: any; fy: any; y: any }) {
          if (!d3.event.active) simulation.alphaTarget(0.3).restart()
          d.fx = d.x
          d.fy = d.y
        }

        function dragged(d: { fx: any; fy: any }) {
          d.fx = d3.event.x
          d.fy = d3.event.y
        }

        function dragended(d: { fx: any; fy: any }) {
          if (!d3.event.active) simulation.alphaTarget(0)
          d.fx = null
          d.fy = null
        }

        return d3
          .drag()
          .on('start', dragstarted)
          .on('drag', dragged)
          .on('end', dragended)
      }

      const simulation = d3
        .forceSimulation(nodes)
        .force(
          'link',
          d3.forceLink(links).id((d: any) => d.id)
        )
        .force('charge', d3.forceManyBody())
        .force('x', d3.forceX())
        .force('y', d3.forceY())

      const svg = d3
        .select('.directed-graph')
        .attr('width', '100%')
        .attr('height', '500px')
        // .attr('viewbox', `${-this.chartWidth / 2} ${-this.chartHeight / 2} ${this.chartWidth} ${this.chartHeight}`)
        .attr('viewBox', '-477,-340,954,680')

      const link = svg
        .append('g')
        .attr('class', 'node-graph-lines')
        .attr('stroke', '#999')
        .attr('stroke-opacity', 0.6)
        .selectAll('line')
        .data(links)
        .join('line')
        .attr('stroke-width', (d: any) => Math.sqrt(d.target))

      const node = svg
        .append('g')
        .attr('class', 'node-graph-circle')
        .attr('stroke', '#fff')
        .attr('stroke-width', 1)
        .selectAll('circle')
        .data(nodes)
        .join('circle')
        .attr('r', 5)
        .attr('fill', (d: any) => color(d.n_contacts))
      // .call(drag(simulation))

      simulation.on('tick', () => {
        link
          .attr('x1', (d: any) => d.source.x)
          .attr('y1', (d: any) => d.source.y)
          .attr('x2', (d: any) => d.target.x)
          .attr('y2', (d: any) => d.target.y)

        node.attr('cx', (d: any) => d.x).attr('cy', (d: any) => d.y)
      })

      invalidation.then(() => simulation.stop())

      svg.node()
    } catch (e) {
      console.log(e)
    }
  }

  initGraph(data: { nodes: any; links: any }) {
    try {
      const links = data.links.map((d: any) => Object.create(d))
      const nodes = data.nodes.map((d: any) => Object.create(d))

      // console.log('links', links)
      // console.log('nodes', nodes)

      const color = (d: any) => {
        const scale = d3.scaleOrdinal(d3.schemeCategory10)(d)
        // return d3.scaleOrdinal(d3.schemeCategory10)(d)
        return '#781b4e'
      }

      const drag = (simulation: d3.Simulation<d3.SimulationNodeDatum, undefined>) => {
        function dragstarted(d: { fx: any; x: any; fy: any; y: any }) {
          if (!d3.event.active) simulation.alphaTarget(0.3).restart()
          d.fx = d.x
          d.fy = d.y
        }

        function dragged(d: { fx: any; fy: any }) {
          d.fx = d3.event.x
          d.fy = d3.event.y
        }

        function dragended(d: { fx: any; fy: any }) {
          if (!d3.event.active) simulation.alphaTarget(0)
          d.fx = null
          d.fy = null
        }

        return d3
          .drag()
          .on('start', dragstarted)
          .on('drag', dragged)
          .on('end', dragended)
      }

      const simulation = d3
        .forceSimulation(nodes)
        // .force(
        //   'link',
        //   d3.forceLink(links).id((d: any) => d.id)
        // )
        .force('charge', d3.forceManyBody())
        .force('x', d3.forceX())
        .force('y', d3.forceY())

      const svg = d3
        .select('.directed-graph')
        .attr('width', '100%')
        .attr('height', '500px')
        // .attr('viewbox', `${-this.chartWidth / 2} ${-this.chartHeight / 2} ${this.chartWidth} ${this.chartHeight}`)
        .attr('viewBox', '-477,-340,954,680')

      const link = svg
        .append('g')
        .attr('class', 'node-graph-lines')
        .attr('stroke', '#999')
        .attr('stroke-opacity', 0.6)
        .selectAll('line')
        .data(links)
        .join('line')
        .attr('stroke-width', (d: any) => Math.sqrt(d.target))

      const node = svg
        .append('g')
        .attr('class', 'node-graph-circle')
        .attr('stroke', '#fff')
        .attr('stroke-width', 1)
        .selectAll('circle')
        .data(nodes)
        .join('circle')
        .attr('r', 5)
        .attr('fill', (d: any) => color(d.n_contacts))
      // .call(drag(simulation))

      simulation.on('tick', () => {
        link
          .attr('x1', (d: any) => d.source.x)
          .attr('y1', (d: any) => d.source.y)
          .attr('x2', (d: any) => d.target.x)
          .attr('y2', (d: any) => d.target.y)

        node.attr('cx', (d: any) => d.x).attr('cy', (d: any) => d.y)
      })

      invalidation.then(() => simulation.stop())

      svg.node()
    } catch (e) {
      console.log(e)
    }
  }

  // getData() {
  //   const data: NodeGraphRequestData = {
  //     random_encounters: '0.01',
  //     prob_communities: '0.1,0.2,0.3,0.4,0.5',
  //     initial_fraction_infected: '0.08',
  //     fraction_interacting: '0.9',
  //     p_infection: '0.1',
  //     p_contact: '1.0'
  //   }
  //   this.homeService.getNodeGrapData(data).subscribe(response => {
  //     if (response.successs) {
  //       this.createGraph({ links: response.data.links, nodes: response.data.nodes })
  //     }
  //   })
  // }

  getSliderTickInterval(): number | 'auto' {
    if (this.showTicks) {
      return this.autoTicks ? 'auto' : this.tickInterval
    }
    return 0
  }

  getFormmValues(value: number): string {
    return `${value / 100}`
  }

  getGraphData() {
    const data: NodeGraphRequestData = {
      random_encounters: this.getFormmValues(this.formController.get('random_encounters').value),
      prob_communities: `${this.getFormmValues(this.formController.get('prob_communities_1').value)},${this.getFormmValues(
        this.formController.get('prob_communities_2').value
      )},${this.getFormmValues(this.formController.get('prob_communities_3').value)},${this.getFormmValues(
        this.formController.get('prob_communities_4').value
      )},${this.getFormmValues(this.formController.get('prob_communities_5').value)},${this.getFormmValues(
        this.formController.get('prob_communities_6').value
      )}`,
      initial_fraction_infected: this.getFormmValues(this.formController.get('initial_fraction_infected').value),
      fraction_interacting: this.getFormmValues(this.formController.get('fraction_interacting').value),
      p_infection: this.getFormmValues(this.formController.get('p_infection').value),
      p_contact: this.getFormmValues(this.formController.get('p_contact').value)
    }
    try {
      this.homeService.getNodeGrapData(data).subscribe(response => {
        try {
          this.removeNodeGraph()
        } catch (error) {}
        if (response.successs) {
          this.createGraph({ links: response.data.links, nodes: response.data.nodes })
        }else {
          this.createGraph({ links: this.data.links, nodes: this.data.nodes })
        }
      })
    } catch (error) {
      console.log(error)
      this.createGraph({ links: this.data.links, nodes: this.data.nodes })
    }
  }

  onChange(event: Event) {
    this.getGraphData()
  }
}
