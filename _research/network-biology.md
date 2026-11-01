---
title: Functional Genomics & Network Biology
description: Characterizing the cell-type-specific molecular perturbations that drive dysregulation of biological processes in Alzheimer's disease.
period: PhD · 2021 – 2025
order: 1
image: /assets/img/network.webp
brief: >-
  Half of my thesis focused on characterizing the cell-type-specific molecular
  perturbations that drive the dysregulation of biological processes in
  Alzheimer's disease (AD), integrating snRNA-seq and scATAC-seq from AD brains
  to show how molecular network alterations translate into functional
  impairment of cellular processes.
---

## 1. Cell-type-specific network perturbations driving dysregulated biology in AD

<p class="cite">Adeoye, Shah &amp; Ullah · <a href="https://www.aginganddisease.org/EN/10.14336/AD.2024.0429"><em>Aging and Disease</em>, 2024</a></p>

{% include figure.html src="/assets/img/grn.webp" alt="Gene regulatory network schematic" caption="Differential expression alone is not sufficient in AD. Pathway perturbations are driven by the interplay of sets of genes within biological processes and signaling cascades, not by individual DEGs in isolation." %}

AD is a complex systems disease: its pathology extends beyond isolated molecular changes to interactions within gene networks. Transcriptomic profiling has opened up cell-type-specific questions, but traditional differential gene expression (DEG) analysis misses much of the disrupted biology. We developed a systems-biology approach to uncover the cell-type-specific drivers of biological process perturbations in AD.

{% include figure.html src="/assets/img/workflow.webp" alt="Study design and bioinformatic workflow" caption="Study workflow and analytical methods." %}

Using snRNA-seq from key AD brain regions, we combined differential activity analysis of Gene Ontology biological processes with high-dimensional weighted gene co-expression analysis ([hdWGCNA](https://smorabit.github.io/hdWGCNA/)). Aggregating expression within each GO process into pathway activity scores per donor, brain region and cell type increased sensitivity to subtle expression changes.

{% include figure.html src="/assets/img/heatmap_unique.webp" alt="Pathways uniquely perturbed in one cell type" src2="/assets/img/heatmap_broad.webp" alt2="Pathways perturbed across multiple cell types" caption="Left: cell-type-specific pathway perturbations in AD. Right: processes dysregulated broadly across cell types." %}

AD inflicts widespread perturbations across all three regions, from cell-type-specific alterations to pathways disrupted in many cell types. In the middle temporal gyrus, for example, neurons showed distinct changes in membrane organization, vesicle recycling and Ca²⁺ signaling, while glia predominantly showed altered vesicle transport, inflammation and signaling.

{% include figure.html src="/assets/img/gene_programs.webp" alt="DEG distribution among perturbed gene programs" caption="DEGs are underrepresented in perturbed gene programs." %}

Surprisingly, only a small fraction of DEGs belonged to the gene programs that make up the perturbed pathways. Differential expression alone does not capture the complexity of AD molecular changes.

{% include figure.html src="/assets/img/neuronal_networks.webp" alt="Neuronal co-expression networks" src2="/assets/img/glia_networks.webp" alt2="Glial co-expression networks" caption="Co-expression networks in neurons (left) and glia (right)." %}

To see how DEGs influence systems-level dysregulation, we built co-expression networks per cell type and region, focused on genes within perturbed pathways. We identified distinct modules and hub genes for each cell type. In the MTG, differentially expressed hubs such as *MT-CO1*, *CALM2* and *WASF1* concentrated in specific modules, pointing to dysregulated mitochondrial function, Ca²⁺ signaling and cytoskeletal dynamics. Few glial modules were enriched for hub-DEGs, but many contained AD-related hubs such as *APOE*, *CLU*, *CST3*, *CD81* and SLC-family genes tied to glutamate regulation, synaptic plasticity and microglial activation.

Recurrent hub genes across regions suggested conserved drivers. Excitatory neurons shared hubs such as *ACTB*, *CALM1/2*, *GAPDH*, *HSP90AB1* and *UCHL1*, involved in Ca²⁺ regulation, autophagy and synaptic function. Most of these were *not* DEGs, reinforcing that coordinated network-level dysregulation, rather than changes in individual genes, mediates pathway perturbation.

## 2. Glia–neuron signaling that propagates AD pathway dysregulation

Building on these findings, this work maps how glia–neuron signaling propagates AD-associated pathway dysregulation, with a focus on astrocyte–glutamatergic neuron signaling at tripartite synapses.

Astrocytes and microglia play critical roles in neuronal dysfunction in AD, and our earlier work showed reactive signatures and perturbed regulatory programs in both. These perturbations could propagate molecular alterations from glia to neurons, contributing to synaptic dysfunction and neuronal loss, but the mechanisms, and how much is cell-autonomous versus non-cell-autonomous, remain poorly defined.

We combine scRNA-seq, scATAC-seq and complementary systems-level strategies to separate pathway disruptions that originate within a cell type from those caused by dysfunctional signaling between cell types, for example complement (C1q) expression in disease-associated microglia or disrupted thrombospondin release from astrocytes triggering synaptic pruning and excitotoxicity.

We then focus on tripartite synapses. Astrocytes regulate excitatory glutamate signaling and prevent excitotoxicity, but how this fails in AD is unclear. Using spatial transcriptomics from AD and control tissue across brain regions, we map DEGs, ligand–receptor pairs and dysregulated pathways at astrocyte–neuron interaction sites, testing the hypothesis that AD alters astrocytic receptors, transporters and channels in ways that break coordination with neighboring glutamatergic neurons.
