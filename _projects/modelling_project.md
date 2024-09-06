---
layout: page
title: Biophysical Modelling
description: Modelling cellular level signalling perturbations driving synaptic dysfunction in Alzheimer's Disease
img: assets/img/release_scheme.png
importance: 1
category: research
related_publications: true
---

My thesis is centred around developing systems biology techniques to characterize the cell-type specific mechanisms of synaptic dysfunction in Alzheimer's disease (AD). Much of this work has focused building biophysically detailed _in-silico_ models of hippocampal CA3-CA1 pyramidal boutons to study effects of disrupted Ca<sup>2+</sup> signaling on neurotransmitter release and synaptic plasticity. Here I briefly describe each of two key projects in chronological order, which sums up half the specific aims from my thesis.

***

### 1. Analyzing the effects of disrupted Ca<sup>2+</sup> signalling on neurotransmitter release and synaptic plasticity in an in-silico model of Familial Alzheimer's Disease. 

In our first key project {% cite adeoye_upregulated_2022 %}., we addressed the poorly undertood topic of disrupted Ca<sup>2+</sup> signaling in FAD. Dysregulations in intracellular Ca<sup>2+</sup> homeostasis are known to play a pivotal role in the early stages of AD, particularly in FAD. However, the precise mechanisms linking these molecular aberrations to functional impairments have remained elusive. To address this gap, we developed a sophisticated computational model and perform in silico experiments of intracellular Ca<sup>2+</sup> signalling and exocytosis in a detailed biophysical model of hippocampal synapses to study how pathological Ca<sup>2+</sup> release from the endoplasmic reticulum (ER) alters action potential-driven synaptic transmission in FAD.

</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/FAD_ip3r_model.png" title="IP3 Receptor Kinetics" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The Gain-of-Function enhancement of IP<sub>3</sub>R Gating in FAD.
</div>

We began by developing a novel four-state kinetic model of IP<sub>3</sub>R gating, fit to recent data from cortical neurons. This model captured the mechanistic basis of IP<sub>3</sub>R gain-of-function observed in FAD and provided a crucial foundation for our subsequent work. Building on this, we created a biophysically realistic multicompartment model of intracellular Ca<sup>2+</sup> dynamics in a hippocampal CA3 pyramidal axonal bouton. We coupled this Ca<sup>2+</sup> model to a detailed model of synaptic vesicle exocytosis to examine the effects of pathological IP<sub>3</sub>R-mediated ER Ca<sup>2+</sup> mishandling on neurotransmitter release kinetics with unprecedented detail.

<div class="row justify-content-sm-center">
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/FAD_plasticity.png" title="plascity" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/FAD_synchrony.png" title="synchronu" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    (Left) FAD-Driven Ca<sup>2+</sup> Dysregulations Enhance Neurotransmitter Release. (Right) Synchrony of Release Events Is Reduced in FAD-Affected Synapses.
</div>

We discovered that FAD-affected synapses exhibited increased release rates, probabilities, and numbers of vesicles released from the readily releasable pool following a single action potential. Interestingly, our results suggested that small hippocampal synapses may be most vulnerable to the Ca<sup>2+</sup> dyshomeostasis associated with FAD. Contrary to expectations, FAD synapses showed reduced paired-pulse depression, a phenomenon we attributed to sustained elevated residual Ca<sup>2+</sup> in nerve terminals.

Perhaps most strikingly, our model revealed a significant shift towards enhanced asynchronous release at the expense of synchronous release in FAD synapses. This finding has profound implications for synaptic function, as it suggests a fundamental alteration in the temporal dynamics of neurotransmitter release in AD. Further analysis demonstrated that FAD model synapses displayed impaired response synchronization, potentially disrupting the temporal coding of information in mid- to high-fidelity synapses.

Overally, our work elucidates the mechanisms underlying how disrupted Ca<sup>2+</sup> signaling alters synaptic transmission and plasticity in FAD and provides a foundation for  further understanding the perturbations in the early stages of AD progression.

***
