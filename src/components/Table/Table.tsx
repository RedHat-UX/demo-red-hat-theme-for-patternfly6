import { TableBasic } from "./variations/TableBasic";
import { TableMisc } from "./variations/TableMisc";
import { TableSortable } from "./variations/TableSortable";
import { TableSortableCustom } from "./variations/TableSortableCustom";
import { TableSelectable } from "./variations/TableSelectable";
import { TableSelectableRadio } from "./variations/TableSelectableRadio";
import { TableClickable } from "./variations/TableClickable";
import { TableEditable } from "./variations/TableEditable";
import { TableActions } from "./variations/TableActions";
import { TableActionsOverflow } from "./variations/TableActionsOverflow";
import { TableExpandable } from "./variations/TableExpandable";
import { TableCompoundExpandable } from "./variations/TableCompoundExpandable";
import { TableCellWidth } from "./variations/TableCellWidth";
import { TableControllingText } from "./variations/TableControllingText";
import { TableTextModifiers } from "./variations/TableTextModifiers";
import { TableEmptyState } from "./variations/TableEmptyState";
import { TableFavoritable } from "./variations/TableFavoritable";
import { TableTree } from "./variations/TableTree";
import { TableTreeNoInset } from "./variations/TableTreeNoInset";
import { TableDraggable } from "./variations/TableDraggable";
import { TableStickyColumn } from "./variations/TableStickyColumn";
import { TableMultipleStickyColumns } from "./variations/TableMultipleStickyColumns";
import { ComposableTableRightStickyColumn } from "./variations/ComposableTableRightStickyColumn";
import { TableStickyColumnsAndHeader } from "./variations/TableStickyColumnsAndHeader";
import { TableNestedHeaders } from "./variations/TableNestedHeaders";
import { TableNestedExpandable } from "./variations/TableNestedExpandable";
// import { NestedReposTable } from "./variations/NestedReposTable"
import { TableNestedStickyHeaders } from "./variations/TableNestedStickyHeaders";
import { TableStriped } from "./variations/TableStriped";
import { TableStripedExpandable } from "./variations/TableStripedExpandable";
import { TableStripedMultipleTbody } from "./variations/TableStripedMultipleTbody";
import { TableStripedTr } from "./variations/TableStripedTr";
import { Title } from '@patternfly/react-core';



const tableVariations = [
  { component: TableBasic, name: "Basic Table" },
  { component: TableMisc, name: "Custom row wrapper, header tooltips & popovers"}, //Odd rows color issue 
  { component: TableSortable, name: "Sortable & wrapping headers"},
  { component: TableSortableCustom, name: "Sortable - custom control"},
  { component: TableSelectable, name: "Selectable with checkbox"},
  { component: TableSelectableRadio , name: "Selectable radio input"},
  { component: TableClickable , name: "Row click handler, clickable rows"}, //Clicked row stylings issue
  { component: TableEditable , name: "Editable rows"},
  { component: TableActions , name: "Actions"},
  { component: TableActionsOverflow, name: "Actions Overflow" },
  { component: TableExpandable, name: "Expandable"},
  { component: TableCompoundExpandable, name: "Compound Expandable"},
  { component: TableCellWidth, name: "Cell width, breakpoint modifiers"},
  { component: TableControllingText, name: "Controlling text"}, 
  { component: TableTextModifiers, name: "Modifiers with table text"},
  { component: TableEmptyState, name: "Empty state"},
  { component: TableFavoritable, name: "Favoritable (implemented with sortable)"}, //Active state of t-head start icon should show blue color but is showing golden
  { component: TableTree, name: "Table Tree"},
  { component: TableTreeNoInset, name: "Flat tree table with no inset"},
  { component: TableDraggable, name: "Draggable row table"},
  { component: TableStickyColumn, name: "Sticky column"},
  { component: TableMultipleStickyColumns, name: "Multiple left-aligned sticky columns"}, 
  { component: ComposableTableRightStickyColumn, name: "Multiple right-aligned sticky columns"}, 
  { component: TableStickyColumnsAndHeader, name: "Sticky columns and header"},
  { component: TableNestedHeaders, name: "Nested column headers"}, //Double border
  { component: TableNestedExpandable, name: "Nested column headers and expandable rows"}, //Double border
  // { component: NestedReposTable, name: "Expandable with nested table"},
  { component: TableNestedStickyHeaders, name: "Nested sticky header"}, //Double border
  { component: TableStriped, name: "Striped"}, 
  { component: TableStripedExpandable, name: "Striped Expandable"},
  { component: TableStripedMultipleTbody, name: "Striped multiple tobdy"}, 
  { component: TableStripedTr, name: "Striped tr"}, 
];

const PfTable = () => {
  return (
    <>
      {tableVariations.map(({ component: Component, name }, index) => (
        <div key={index} style={{marginBottom: "4rem"}}>
          <Title headingLevel="h2" style={{paddingBottom:"1.5rem"}}>{name}</Title>
          <Component />
        </div>
      ))}
    </>
  );
};

export default PfTable;
