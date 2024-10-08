---
layout: page
title: Biophysical Modelling and Systems Biology
description: Modelling cellular level signalling perturbations driving synaptic dysfunction in Alzheimer's Disease
img: assets/img/FAD_release_scheme.png
importance: 1
category: research
related_publications: true
---

<div style="border-left: 4px solid #3498db; padding-left: 10px; margin-bottom: 20px; font-size: 1.2em;">

<strong>In brief:</strong> My thesis is centred around developing systems biology techniques to characterize the cell-type specific mechanisms of synaptic dysfunction in Alzheimer’s disease (AD). Much of this work has focused building biophysically detailed in-silico models of hippocampal CA3-CA1 pyramidal boutons to study effects of disrupted Ca2+ signaling on neurotransmitter release and synaptic plasticity. Here I briefly describe each of two key projects in chronological order, which sums up half the specific aims from my thesis.

</div>

***

### **1. Analyzing the effects of disrupted Ca<sup>2+</sup> signalling on neurotransmitter release and synaptic plasticity in an in-silico model of Familial Alzheimer's Disease. {% cite adeoye_upregulated_2022 %}.** 

This was my first key project, where we addressed the poorly undertood topic of disrupted Ca<sup>2+</sup> signaling in FAD. Dysregulations in intracellular Ca<sup>2+</sup> homeostasis are known to play a pivotal role in the early stages of AD, particularly in FAD. However, the precise mechanisms linking these molecular aberrations to functional impairments have remained elusive. To address this gap, we developed a sophisticated computational model and perform in silico experiments of intracellular Ca<sup>2+</sup> signalling and exocytosis in a detailed biophysical model of hippocampal synapses to study how pathological Ca<sup>2+</sup> release from the endoplasmic reticulum (ER) alters action potential-driven synaptic transmission in FAD.

<div class="row justify-content-sm-center">
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/FAD_ip3r_model.png" title="IP3 Receptor Kinetics" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/FAD_ca_model.png" title="Multicompartmental calcium model" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    (Left) The Gain-of-Function enhancement of IP<sub>3</sub>R Gating in FAD. (Right) The Schematic of the overall multi-compartmental Ca<sup>2+</sup> model.
</div>

We began by developing a novel four-state kinetic model of IP<sub>3</sub>R gating, fit to recent data from cortical neurons. This model captured the mechanistic basis of IP<sub>3</sub>R gain-of-function observed in FAD and provided a crucial foundation for our subsequent work. Building on this, we created a biophysically realistic multicompartment model of intracellular Ca<sup>2+</sup> dynamics in a hippocampal CA3 pyramidal axonal bouton. 

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/FAD_release_scheme.png" title="Kinetic scheme of vesicle release" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Kinetic Scheme for Ca<sup>2+</sup>-dependent vesicle mobilization and priming.
</div>

We coupled this Ca<sup>2+</sup> model to a detailed model of synaptic vesicle exocytosis to examine the effects of pathological IP<sub>3</sub>R-mediated ER Ca<sup>2+</sup> mishandling on neurotransmitter release kinetics with unprecedented detail.

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

We discovered that FAD-affected synapses exhibited increased release rates, instrinsic release probabilities, and numbers of vesicles released from the readily releasable pool following a single action potential. Interestingly, our results suggested that small hippocampal synapses may be most vulnerable to the Ca<sup>2+</sup> dyshomeostasis associated with FAD. Contrary to the notion that high initial activity drives subsequent depression through depletion of the readily releasable pool of vesicles, FAD synapses showed reduced paired-pulse depression, a phenomenon we attributed to sustained elevated residual Ca<sup>2+</sup> in nerve terminals.

Perhaps most strikingly, our model revealed a significant shift towards enhanced asynchronous release at the expense of synchronous release in FAD synapses. This finding has profound implications for synaptic function, as it suggests a fundamental alteration in the temporal dynamics of neurotransmitter release in AD. Further analysis demonstrated that FAD model synapses displayed impaired response synchronization, potentially disrupting the temporal coding of information in mid- to high-fidelity synapses.

Overally, our work elucidates the mechanisms underlying how disrupted Ca<sup>2+</sup> signaling alters synaptic transmission and plasticity in FAD and provides a foundation for  further understanding the perturbations in the early stages of AD progression.

***

### **2. Investigating Amyloid-β (Aβ)-mediated Cation Pore Formation and Its Effects on Presynaptic Function.**

Our current onging second work, now looks into the mechanisms of synaptic dysfunction in AD driven by Aβ-mediated cation pore formation. This work builds on our previous findings and extends the model to incorporate the complex relationship between Aβ pores, FAD-associated intracellular Ca<sup>2+</sup> dyshomeostasis, and exocytosis.

Aβ, particularly in their oligomeric form, have been implicated in the formation of Ca<sup>2+</sup>-permeable pores in neuronal membranes. These pores are thought to disrupt cellular ionic homeostasis and contribute to the synaptic dysfunction observed in AD. However, the precise mechanisms by which these Aβ pores modulate presynaptic function and neurotransmitter release are not well understood, and our work here aims to elucidate these mechanisms through detailed in-silico modeling.

We have extended our previous computational model of the CA3-CA1 hippocampal synapse to include a new nanodomain representing Aβ pore-driven Ca<sup>2+</sup> transients. This addition allows us to capture the localized Ca<sup>2+</sup> dynamics produced by spatially distributed clusters of Aβ pores in the plasma membrane. Our model incorporates the complex gating properties of Aβ pores, including their sub-conductance levels and temporal evolution, based on experimental data from single-channel imaging studies.

Our preliminary findings that synapses with Aβ pores exhibit prolonged release phases and altered calcium handling, which may have profound implications for synaptic function and plasticity. More so, our results suggest that the presence of Aβ pores leads to a fundamental temporal redistribution of release events, contrasting sharply with the precisely-timed release bursts characteristic of healthy synapses. We also observed a complex, biphasic role for Aβ pores in modulating synaptic activation, with their effects highly dependent on the temporal pattern of their activity, which may shed light on some of the complex cognitive symptoms observed in early-stage AD.

One of the most intriguing aspects of this ongoing work is the investigation of how Aβ pores interact with FAD-driven dysregulated ER Ca<sup>2+</sup> release. Our model allows us to explore the combined effects of Aβ pores and FAD-associated ER perturbations on presynaptic function. Early results suggest that this interaction may lead to more severe and prolonged disruptions of normal synaptic transmission than either factor alone.
***
