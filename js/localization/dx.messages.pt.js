/*!
* DevExtreme (dx.messages.pt.js)
* Version: 17.2.11 (build 19009)
* Build date: Wed Jan 09 2019
*
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
"use strict";

! function(root, factory) {
    if ("function" === typeof define && define.amd) {
        define(function(require) {
            factory(require("devextreme/localization"))
        })
    } else {
        if ("object" === typeof module && module.exports) {
            factory(require("devextreme/localization"))
        } else {
            factory(DevExpress.localization)
        }
    }
}(this, function(localization) {
    localization.loadMessages({
        pt: {
            Yes: "Sim",
            No: "Não",
            Cancel: "Cancelar",
            Clear: "Limpar",
            Done: "Concluído",
            Loading: "Carregando ...",
            Select: "Selecione ...",
            Search: "Pesquisar ...",
            Back: "Voltar",
            OK: "OK",
            "dxCollectionWidget-noDataText": "Sem dados",
            "validation-required": "Preenchimento obrigatório",
            "validation-required-formatted": "{0} é de preenchimento obrigatório",
            "validation-numeric": "Valor deve ser um número",
            "validation-numeric-formatted": "{0} deve ser um número",
            "validation-range": "Valor está fora do intervalo",
            "validation-range-formatted": "{0} está fora do intervalo",
            "validation-stringLength": "O comprimento do valor não está correcto",
            "validation-stringLength-formatted": "O comprimento de {0} não está correcto",
            "validation-custom": "Valor inválido",
            "validation-custom-formatted": "{0} é inválido",
            "validation-compare": "Valores não coincidem",
            "validation-compare-formatted": "{0} não coincidem",
            "validation-pattern": "Valor não corresponde ao padrão",
            "validation-pattern-formatted": "{0} não corresponde ao padrão",
            "validation-email": "Email inválido",
            "validation-email-formatted": "{0} é inválido",
            "validation-mask": "Valor inválido",
            "dxLookup-searchPlaceholder": "Número mínimo de caracteres: {0}",
            "dxList-pullingDownText": "Puxar para baixo para recarregar...",
            "dxList-pulledDownText": "Soltar para recarregar...",
            "dxList-refreshingText": "A recarregar...",
            "dxList-pageLoadingText": "A carregar...",
            "dxList-nextButtonText": "Mais",
            "dxList-selectAll": "Seleccionar todos",
            "dxListEditDecorator-delete": "Eliminar",
            "dxListEditDecorator-more": "Mais",
            "dxScrollView-pullingDownText": "Puxar para baixo para recarregar...",
            "dxScrollView-pulledDownText": "Soltar para recarregar...",
            "dxScrollView-refreshingText": "A recarregar...",
            "dxScrollView-reachBottomText": "A carregar...",
            "dxDateBox-simulatedDataPickerTitleTime": "Seleccionar hora",
            "dxDateBox-simulatedDataPickerTitleDate": "Seleccionar data",
            "dxDateBox-simulatedDataPickerTitleDateTime": "Seleccionar data e hora",
            "dxDateBox-validation-datetime": "Valor deve ser uma data ou hora",
            "dxFileUploader-selectFile": "Seleccionar ficheiro",
            "dxFileUploader-dropFile": "ou Soltar ficheiro aqui",
            "dxFileUploader-bytes": "bytes",
            "dxFileUploader-kb": "kb",
            "dxFileUploader-Mb": "Mb",
            "dxFileUploader-Gb": "Gb",
            "dxFileUploader-upload": "Upload",
            "dxFileUploader-uploaded": "Upload concluído",
            "dxFileUploader-readyToUpload": "Pronto para upload",
            "dxFileUploader-uploadFailedMessage": "Upload falhou",
            "dxRangeSlider-ariaFrom": "De {0}",
            "dxRangeSlider-ariaTill": "Até {0}",
            "dxSwitch-onText": "LIGADO",
            "dxSwitch-offText": "DESLIGADO",
            "dxForm-optionalMark": "opcional",
            "dxForm-requiredMessage": "{0} é de preenchimento obrigatório",
            "dxNumberBox-invalidValueMessage": "Valor deve ser um número",
            "dxDataGrid-columnChooserTitle": "Selector de Colunas",
            "dxDataGrid-columnChooserEmptyText": "Arraste uma coluna para aqui para a esconder",
            "dxDataGrid-groupContinuesMessage": "Continua na página seguinte",
            "dxDataGrid-groupContinuedMessage": "Continuação da página anterior",
            "dxDataGrid-groupHeaderText": "Agrupar pela coluna",
            "dxDataGrid-ungroupHeaderText": "Remover grupo",
            "dxDataGrid-ungroupAllText": "Remover todos os grupos",
            "dxDataGrid-editingEditRow": "Editar",
            "dxDataGrid-editingSaveRowChanges": "Guardar",
            "dxDataGrid-editingCancelRowChanges": "Cancelar",
            "dxDataGrid-editingDeleteRow": "Eliminar",
            "dxDataGrid-editingUndeleteRow": "Recuperar",
            "dxDataGrid-editingConfirmDeleteMessage": "Tem a certeza que pretende eliminar este registo?",
            "dxDataGrid-validationCancelChanges": "Cancelar alterações",
            "dxDataGrid-groupPanelEmptyText": "Arrastar o cabeçalho de uma coluna para aqui para agrupar por essa coluna",
            "dxDataGrid-noDataText": "Sem dados",
            "dxDataGrid-searchPanelPlaceholder": "Pesquisar...",
            "dxDataGrid-filterRowShowAllText": "(Todos)",
            "dxDataGrid-filterRowResetOperationText": "Limpar",
            "dxDataGrid-filterRowOperationEquals": "Igual",
            "dxDataGrid-filterRowOperationNotEquals": "Diferente",
            "dxDataGrid-filterRowOperationLess": "Menor que",
            "dxDataGrid-filterRowOperationLessOrEquals": "Menor que ou igual a",
            "dxDataGrid-filterRowOperationGreater": "Maior que",
            "dxDataGrid-filterRowOperationGreaterOrEquals": "Maior que ou igual a",
            "dxDataGrid-filterRowOperationStartsWith": "Começa com",
            "dxDataGrid-filterRowOperationContains": "Contém",
            "dxDataGrid-filterRowOperationNotContains": "Não contém",
            "dxDataGrid-filterRowOperationEndsWith": "Termina com",
            "dxDataGrid-filterRowOperationBetween": "Entre",
            "dxDataGrid-filterRowOperationBetweenStartText": "Início",
            "dxDataGrid-filterRowOperationBetweenEndText": "Fim",
            "dxDataGrid-applyFilterText": "Aplicar filtro",
            "dxDataGrid-trueText": "verdadeiro",
            "dxDataGrid-falseText": "falso",
            "dxDataGrid-sortingAscendingText": "Ordenar ascendentemente",
            "dxDataGrid-sortingDescendingText": "Ordenar descendentemente",
            "dxDataGrid-sortingClearText": "Limpar ordenação",
            "dxDataGrid-editingSaveAllChanges": "Guardar alterações",
            "dxDataGrid-editingCancelAllChanges": "Descartar alterações",
            "dxDataGrid-editingAddRow": "Adicionar uma linha",
            "dxDataGrid-summaryMin": "Mín: {0}",
            "dxDataGrid-summaryMinOtherColumn": "Mín de {1} é {0}",
            "dxDataGrid-summaryMax": "Máx: {0}",
            "dxDataGrid-summaryMaxOtherColumn": "Máx de {1} é {0}",
            "dxDataGrid-summaryAvg": "Méd: {0}",
            "dxDataGrid-summaryAvgOtherColumn": "Média de {1} é {0}",
            "dxDataGrid-summarySum": "Soma: {0}",
            "dxDataGrid-summarySumOtherColumn": "Soma de {1} é {0}",
            "dxDataGrid-summaryCount": "Contagem: {0}",
            "dxDataGrid-columnFixingFix": "Fixar",
            "dxDataGrid-columnFixingUnfix": "Não fixar",
            "dxDataGrid-columnFixingLeftPosition": "À esquerda",
            "dxDataGrid-columnFixingRightPosition": "À direita",
            "dxDataGrid-exportTo": "Exportar para",
            "dxDataGrid-exportToExcel": "Exportar para ficheiro Excel",
            "dxDataGrid-excelFormat": "Ficheiro Excel",
            "dxDataGrid-exportAll": "Exportar todos os dados",
            "dxDataGrid-exportSelectedRows": "Exportar linhas seleccionadas",
            "dxDataGrid-selectedRows": "Linhas seleccionadas",
            "dxDataGrid-headerFilterEmptyValue": "(Vazio)",
            "dxDataGrid-headerFilterOK": "OK",
            "dxDataGrid-headerFilterCancel": "Cancelar",
            "dxDataGrid-ariaColumn": "Coluna",
            "dxDataGrid-ariaValue": "Valor",
            "dxDataGrid-ariaFilterCell": "Filtro de célula",
            "dxDataGrid-ariaCollapse": "Contrair",
            "dxDataGrid-ariaExpand": "Expandir",
            "dxDataGrid-ariaDataGrid": "Grelha de dados",
            "dxDataGrid-ariaSearchInGrid": "Pesquisar na grelha de dados",
            "dxDataGrid-ariaSelectAll": "Seleccionar todos",
            "dxDataGrid-ariaSelectRow": "Seleccionar linha",
            "dxTreeList-ariaTreeList": "Lista em árvore",
            "dxTreeList-editingAddRowToNode": "Adicionar",
            "dxPager-infoText": "Página {0} de {1} ({2} itens)",
            "dxPager-pagesCountText": "de",
            "dxPivotGrid-grandTotal": "Grande Total",
            "dxPivotGrid-total": "{0} Total",
            "dxPivotGrid-fieldChooserTitle": "Selector de Colunas",
            "dxPivotGrid-showFieldChooser": "Mostrar Selector de Colunas",
            "dxPivotGrid-expandAll": "Expandir Tudo",
            "dxPivotGrid-collapseAll": "Contrair Tudo",
            "dxPivotGrid-sortColumnBySummary": 'Ordenar "{0}" por esta Coluna',
            "dxPivotGrid-sortRowBySummary": 'Ordenar "{0}" por esta Linha',
            "dxPivotGrid-removeAllSorting": "Remover Todas as Ordenações",
            "dxPivotGrid-dataNotAvailable": "N/A",
            "dxPivotGrid-rowFields": "Campos de Linha",
            "dxPivotGrid-columnFields": "Campos de Coluna",
            "dxPivotGrid-dataFields": "Campos de Dados",
            "dxPivotGrid-filterFields": "Campos de Filtro",
            "dxPivotGrid-allFields": "Todos os Campos",
            "dxPivotGrid-columnFieldArea": "Arraste os campos de coluna para aqui",
            "dxPivotGrid-dataFieldArea": "Arraste os campos de dados para aqui",
            "dxPivotGrid-rowFieldArea": "Arraste os campos de linha para aqui",
            "dxPivotGrid-filterFieldArea": "Arraste os campos de filtro para aqui",
            "dxScheduler-editorLabelTitle": "Assunto",
            "dxScheduler-editorLabelStartDate": "Data de Início",
            "dxScheduler-editorLabelEndDate": "Data Final",
            "dxScheduler-editorLabelDescription": "Descrição",
            "dxScheduler-editorLabelRecurrence": "Repetir",
            "dxScheduler-openAppointment": "Abrir compromisso",
            "dxScheduler-recurrenceNever": "Nunca",
            "dxScheduler-recurrenceDaily": "Diariamente",
            "dxScheduler-recurrenceWeekly": "Semanalmente",
            "dxScheduler-recurrenceMonthly": "Menslmente",
            "dxScheduler-recurrenceYearly": "Anualmente",
            "dxScheduler-recurrenceEvery": "Todos",
            "dxScheduler-recurrenceEnd": "Fim da repetição",
            "dxScheduler-recurrenceAfter": "Depois de",
            "dxScheduler-recurrenceOn": "A",
            "dxScheduler-recurrenceRepeatDaily": "dia(s)",
            "dxScheduler-recurrenceRepeatWeekly": "semana(s)",
            "dxScheduler-recurrenceRepeatMonthly": "mês(es)",
            "dxScheduler-recurrenceRepeatYearly": "ano(s)",
            "dxScheduler-switcherDay": "Dia",
            "dxScheduler-switcherWeek": "Semana",
            "dxScheduler-switcherWorkWeek": "Dias úteis",
            "dxScheduler-switcherMonth": "Mês",
            "dxScheduler-switcherTimelineDay": "Linha de tempo Dia",
            "dxScheduler-switcherTimelineWeek": "Linha de tempo Semana",
            "dxScheduler-switcherTimelineWorkWeek": "Linha de tempo Dias úteis",
            "dxScheduler-switcherTimelineMonth": "Linha de tempo Mês",
            "dxScheduler-switcherAgenda": "Agenda",
            "dxScheduler-recurrenceRepeatOnDate": "na data",
            "dxScheduler-recurrenceRepeatCount": "ocorrência(s)",
            "dxScheduler-allDay": "Todo o dia",
            "dxScheduler-confirmRecurrenceEditMessage": "Deseja editar só este compromisso ou a série toda?",
            "dxScheduler-confirmRecurrenceDeleteMessage": "Deseja eliminar só este compromisso ou a série toda?",
            "dxScheduler-confirmRecurrenceEditSeries": "Editar série",
            "dxScheduler-confirmRecurrenceDeleteSeries": "Eliminar série",
            "dxScheduler-confirmRecurrenceEditOccurrence": "Editar compromisso",
            "dxScheduler-confirmRecurrenceDeleteOccurrence": "Eliminar compromisso",
            "dxScheduler-noTimezoneTitle": "Sem fuso horário",
            "dxScheduler-moreAppointments": "{0} mais",
            "dxCalendar-todayButtonText": "Hoje",
            "dxCalendar-ariaWidgetName": "Calendário",
            "dxColorView-ariaRed": "Vermelho",
            "dxColorView-ariaGreen": "Verde",
            "dxColorView-ariaBlue": "Azul",
            "dxColorView-ariaAlpha": "Transparência",
            "dxColorView-ariaHex": "Código de cor",
            "dxTagBox-selected": "{0} selecionados",
            "dxTagBox-allSelected": "Todos selecionados ({0})",
            "dxTagBox-moreSelected": "{0} mais",
            "vizExport-printingButtonText": "Imprimir",
            "vizExport-titleMenuText": "Exportar/Imprimir",
            "vizExport-exportButtonText": "{0}-Arquivo",
            "dxFilterBuilder-and": "E",
            "dxFilterBuilder-or": "OU",
            "dxFilterBuilder-notAnd": "NÃO E",
            "dxFilterBuilder-notOr": "NÃO OU",
            "dxFilterBuilder-addCondition": "Adicionar condição",
            "dxFilterBuilder-addGroup": "Adicionar Grupo",
            "dxFilterBuilder-enterValueText": "<preencha com um valor>",
            "dxFilterBuilder-filterOperationEquals": "Igual",
            "dxFilterBuilder-filterOperationNotEquals": "Diferente",
            "dxFilterBuilder-filterOperationLess": "Menor que",
            "dxFilterBuilder-filterOperationLessOrEquals": "Menor ou igual que",
            "dxFilterBuilder-filterOperationGreater": "Maior que",
            "dxFilterBuilder-filterOperationGreaterOrEquals": "Maior ou igual que",
            "dxFilterBuilder-filterOperationStartsWith": "Começa com",
            "dxFilterBuilder-filterOperationContains": "Contém",
            "dxFilterBuilder-filterOperationNotContains": "Não contém",
            "dxFilterBuilder-filterOperationEndsWith": "Termina com",
            "dxFilterBuilder-filterOperationIsBlank": "É vazio",
            "dxFilterBuilder-filterOperationIsNotBlank": "Não é vazio"
        }
    })
});
