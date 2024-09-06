---
layout: page
title: Functional Genomics and Network Biology
description: Characterizing the ell-type-specific molecular perturbations potentially driving dysregulation of biological processes in Alzheimer's Disease.
img: assets/img/network.jpg
importance: 2
category: research
related_publications: true
---

<div style="border-left: 4px solid #3498db; padding-left: 10px; margin-bottom: 20px; font-size: 1.2em;">

<strong>In brief:</strong> This works represent the other half of thesis which focuses on comprehensively characterizing the cell-type-specific molecular perturbations potentially driving dysregulation of biological processes in Alzheimer’s disease (AD). The bulk of the work in this phase is centred around conducting an integrated analysis of snRNA-seq and scATAC-seq data from AD brains to reveal how molecular network alterations translate to functional impairments of cellular processes driving AD pathogenesis.
</div>

***

### **1. Unravelling cell-type-specific molecular network perturbations driving dysregulation of biological processes in AD. {% cite adeoye_upregulated_2022 %}.** 

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/grn.png" title="Gene Regulatory Network" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    DEG Analysis Alone is not Sufficient in the AD Context. The pathological progression and perturbation of biological processes in AD are not merely driven in isolation by DEGs, but rather by the complex interplay of a robust sets of genes within biological processes or signaling cascades.
</div>

The motivation for this work stems from the recognition of AD as a complex systems disease, where pathology extends beyond isolated molecular changes to encompass intricate interactions within gene networks. While transcriptomic profiling has enabled investigation of cell-type-specific mechanisms in AD, traditional differential gene expression (DEG) analysis fails to capture the full spectrum of disrupted processes underlying the disease. Our work addresses this gap by developing a systems biology approach to uncover the cell-type-specific drivers of biological process perturbations in AD.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/workflow.jpeg" title="Study Design and Bioinformatic Workflow" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Schematic overview of study workflow and analytical methods.
</div>

We utilized snRNA-seq data from key AD brain regions and combined differential activity analysis of Gene Ontology biological processes with high-dimensional weighted gene co-expression analysis (hdWGCNA) to provide insights into the functional coherence among genes in perturbed processes. We aggregated gene expression values within each GO process into pathway activity scores for each donor by brain-region and cell-type to allow for increased sensitivity in detecting even subtle expression changes.

<div class="row justify-content-sm-center">
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/heatmap_unique.jpg" title="Pathways uniquely perturbed in cell type" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/heatmap_broad.jpg" title="Pathways broadly perturbed across multiple cell types" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    (Left) TCell-type-specific pathway perturbations in AD. (Right) Broadly dysregulated processes in AD.
</div>

Our analysis revealed that AD inflicts widespread perturbations across molecular processes in the three brain regions, ranging from cell-type-specific alterations to broadly dysregulated pathways affecting multiple cell types. This further highlighted notion of heterogeneity inherent in cellular responses to AD pathogenesis. For instance, in the MTG, neurons showed distinct alterations in synaptic processes like membrane organization, vesicle recycling, and Ca<sup>2+</sup> signaling, while glia predominantly exhibited altered vesicle transport, inflammation, and signaling.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/gene_programs.jpg" title="DEG distributions among perturbed programs" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    DEGs are underrepresented in perturbed gene programs.
</div>

Surprisingly, we found that only a small proportion of differentially expressed genes (DEGs) were associated with the gene programs comprising the previously identified perturbed pathways. This limited, yet dynamic DEG representation indicates that differential gene expression analysis alone does not capture or explain the complexity of AD molecular changes. 


<div class="row justify-content-sm-center">
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/neuronal_networks.png" title="neuronal networks" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/glia_networks.png" title="neuronal networks" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Coexpression networks in neurons (Left) and glia cells (Right).
</div>

To understand how DEGs influence systems-level dysregulation, we examined gene co-expression networks for each cell type per brain region, focusing specifically on genes within the perturbed pathways. We employed high-dimensional Weighted Gene Co-expression Analysis (hdWGCNA), a framework tailored to handle the sparsity in single-cell transcriptomics data. As a result, we uncovered We identified distinct co-expression modules for each cell-type ithin each brain region, along with hub genes likely playing pivotal regulatory roles due to their extensive module interactions. For instance, in the MTG, we found differentially expressed hub genes (hub-DEGs) like MT-CO1, CALM2,WASF1, concentrated in specific modules, which indicates dysregulation of key pathways like mitochondrial function, Ca<sup>2+</sup> signaling, and cytoskeletal dynamics. Surprisngly, only a few glial modules displayed enrichment for hub-DEGs, suggesting a more limited role of DEGs in orchestrating pathway perturbations in glial cells. However, several modules contained AD-related hub genes such as, APOE, CLU, CST3, CD81, and Solute Carrier (SLC) family genes, associated with critical glial functions, such as glutamate regulation, synaptic plasticity, and microglial activation states.

Further analysis of recurrent hub genes across brain regions suggested potential conserved genes driving the observed pathway perturbations in each cell type. For example, excitatory neurons showed substantial overlap in hub genes like ACTB, CALM1/2, GAPDH, HSP90AB1, and UCHL1, participating in critical processes like Ca<sup>2+</sup> regulation, autophagy, and synaptic function. Most overlapping hub genes were non-DEGs that co-expressed in similar modules across regions, reinforcing the notion that coordinated network-level dysregulation, rather than changes in individual genes, mediates pathway perturbations.

***

### **2. Investigating Amyloid-β (Aβ)-mediated Cation Pore Formation and Its Effects on Presynaptic Function.**

Our current onging second work, now looks into the mechanisms of synaptic dysfunction in AD driven by Aβ-mediated cation pore formation. This work builds on our previous findings and extends the model to incorporate the complex relationship between Aβ pores, FAD-associated intracellular Ca<sup>2+</sup> dyshomeostasis, and exocytosis.

Aβ, particularly in their oligomeric form, have been implicated in the formation of Ca<sup>2+</sup>-permeable pores in neuronal membranes. These pores are thought to disrupt cellular ionic homeostasis and contribute to the synaptic dysfunction observed in AD. However, the precise mechanisms by which these Aβ pores modulate presynaptic function and neurotransmitter release are not well understood, and our work here aims to elucidate these mechanisms through detailed in-silico modeling.

We have extended our previous computational model of the CA3-CA1 hippocampal synapse to include a new nanodomain representing Aβ pore-driven Ca<sup>2+</sup> transients. This addition allows us to capture the localized Ca<sup>2+</sup> dynamics produced by spatially distributed clusters of Aβ pores in the plasma membrane. Our model incorporates the complex gating properties of Aβ pores, including their sub-conductance levels and temporal evolution, based on experimental data from single-channel imaging studies.

Our preliminary findings that synapses with Aβ pores exhibit prolonged release phases and altered calcium handling, which may have profound implications for synaptic function and plasticity. More so, our results suggest that the presence of Aβ pores leads to a fundamental temporal redistribution of release events, contrasting sharply with the precisely-timed release bursts characteristic of healthy synapses. We also observed a complex, biphasic role for Aβ pores in modulating synaptic activation, with their effects highly dependent on the temporal pattern of their activity, which may shed light on some of the complex cognitive symptoms observed in early-stage AD.

One of the most intriguing aspects of this ongoing work is the investigation of how Aβ pores interact with FAD-driven dysregulated ER Ca<sup>2+</sup> release. Our model allows us to explore the combined effects of Aβ pores and FAD-associated ER perturbations on presynaptic function. Early results suggest that this interaction may lead to more severe and prolonged disruptions of normal synaptic transmission than either factor alone.
***
