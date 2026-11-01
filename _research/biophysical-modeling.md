---
title: Biophysical Modeling & Systems Biology
description: Modeling the cellular signaling perturbations that drive synaptic dysfunction in Alzheimer's disease.
period: PhD · 2020 – 2025
order: 2
image: /assets/img/fad_release_scheme.webp
brief: >-
  The other half of my thesis built biophysically detailed in-silico models of
  hippocampal CA3–CA1 presynaptic boutons to study how disrupted Ca²⁺
  signaling alters neurotransmitter release and synaptic plasticity in
  Alzheimer's disease.
---

## 1. Disrupted Ca²⁺ signaling, neurotransmitter release and plasticity in familial AD

<p class="cite">Adeoye, Shah, Demuro, Rabson &amp; Ullah · <a href="https://www.mdpi.com/2073-4409/11/14/2167"><em>Cells</em>, 2022</a></p>

Dysregulated intracellular Ca²⁺ homeostasis plays a pivotal role early in AD, particularly in familial AD (FAD), but the mechanisms linking these molecular changes to functional impairment were unclear. We built a detailed computational model of intracellular Ca²⁺ signaling and exocytosis in hippocampal synapses to study how pathological Ca²⁺ release from the endoplasmic reticulum (ER) alters action-potential-driven transmission in FAD.

{% include figure.html src="/assets/img/fad_ip3r_model.webp" alt="IP3 receptor kinetic model" src2="/assets/img/fad_ca_model.webp" alt2="Multicompartment calcium model" caption="Left: gain-of-function enhancement of IP₃R gating in FAD. Right: schematic of the multicompartment Ca²⁺ model." %}

We first developed a four-state kinetic model of IP₃R gating, fit to data from cortical neurons, that captures the mechanistic basis of IP₃R gain-of-function in FAD. On top of it we built a multicompartment model of Ca²⁺ dynamics in a CA3 pyramidal axonal bouton.

{% include figure.html src="/assets/img/fad_release_scheme.webp" alt="Kinetic scheme of vesicle release" caption="Kinetic scheme for Ca²⁺-dependent vesicle mobilization and priming." %}

Coupling this to a detailed model of synaptic vesicle exocytosis let us examine how IP₃R-mediated ER Ca²⁺ mishandling changes release kinetics.

{% include figure.html src="/assets/img/fad_plasticity.webp" alt="Release and plasticity in FAD" src2="/assets/img/fad_synchrony.webp" alt2="Release synchrony in FAD" caption="Left: FAD-driven Ca²⁺ dysregulation enhances neurotransmitter release. Right: synchrony of release events is reduced in FAD synapses." %}

FAD synapses showed higher release rates, higher intrinsic release probability, and more vesicles released from the readily releasable pool after a single action potential, suggesting small hippocampal synapses may be most vulnerable. Contrary to the idea that high initial activity drives depression through vesicle depletion, FAD synapses showed *reduced* paired-pulse depression, which we attribute to sustained elevated residual Ca²⁺.

Most strikingly, the model revealed a shift toward asynchronous release at the expense of synchronous release, and impaired response synchronization, which could disrupt temporal coding in mid- to high-fidelity synapses.

## 2. Amyloid-β cation pores and presynaptic function

This work extends the model to Aβ-mediated cation pore formation. Oligomeric Aβ forms Ca²⁺-permeable pores in neuronal membranes, but how these pores modulate presynaptic function and release is poorly understood.

We added a nanodomain representing Aβ pore-driven Ca²⁺ transients to the CA3–CA1 synapse model, capturing localized Ca²⁺ dynamics from spatially distributed pore clusters, with gating properties (sub-conductance levels and temporal evolution) based on single-channel imaging data.

Preliminary results show prolonged release phases and altered Ca²⁺ handling, with release events redistributed in time rather than delivered in precisely timed bursts. Aβ pores play a biphasic role in synaptic activation that depends on their activity pattern, and their interaction with FAD-driven ER Ca²⁺ release appears to disrupt transmission more severely than either factor alone.
