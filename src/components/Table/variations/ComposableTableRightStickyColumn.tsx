import React from 'react';
import { Table, Thead, Tr, Th, Tbody, Td, InnerScrollContainer, ThProps } from '@patternfly/react-table';

interface Fact {
  name: string;
  state: string;
  detail1: string;
  detail2: string;
  detail3: string;
  detail4: string;
  detail5: string;
  detail6: string;
  detail7: string;
}

export const ComposableTableRightStickyColumn: React.FC = () => {
  // In real usage, this data would come from some external source like an API via props.
  const facts: Fact[] = Array.from({ length: 9 }, (_, index) => ({
    name: `Fact ${index + 1}`,
    state: `State ${index + 1}`,
    detail1: `Test cell ${index + 1}-3`,
    detail2: `Test cell ${index + 1}-4`,
    detail3: `Test cell ${index + 1}-5`,
    detail4: `Test cell ${index + 1}-6`,
    detail5: `Test cell ${index + 1}-7`,
    detail6: `Test cell ${index + 1}-8`,
    detail7: `Test cell ${index + 1}-9`
  }));

  const columnNames = {
    name: 'Fact',
    state: 'State',
    header3: 'Header 3',
    header4: 'Header 4',
    header5: 'Header 5',
    header6: 'Header 6',
    header7: 'Header 7',
    header8: 'Header 8',
    header9: 'Header 9'
  };

 // Index of the currently sorted column
  // Note: if you intend to make columns reorderable, you may instead want to use a non-numeric key
  // as the identifier of the sorted column. See the "Compound expandable" example.
  const [activeSortIndex, setActiveSortIndex] = React.useState<number | null>(null);

  // Sort direction of the currently sorted column
  const [activeSortDirection, setActiveSortDirection] = React.useState<'asc' | 'desc' | null>(null);

  // Since OnSort specifies sorted columns by index, we need sortable values for our object by column index.
  // This example is trivial since our data objects just contain strings, but if the data was more complex
  // this would be a place to return simplified string or number versions of each column to sort by.
  const getSortableRowValues = (fact: Fact): (string | number)[] => {
    return [
      fact.name,
      fact.state,
      fact.detail1,
      fact.detail2,
      fact.detail3,
      fact.detail4,
      fact.detail5,
      fact.detail6,
      fact.detail7
    ];
  };
  
   // Note that we perform the sort as part of the component's render logic and not in onSort.
  // We shouldn't store the list of data in state because we don't want to have to sync that with props.

  const sortedFacts = React.useMemo(() => {
    if (activeSortIndex === null || activeSortDirection === null) {
      return facts;
    }
    return [...facts].sort((a, b) => {
      const aValue = getSortableRowValues(a)[activeSortIndex];
      const bValue = getSortableRowValues(b)[activeSortIndex];
      if (aValue === bValue) return 0;
      return (aValue > bValue ? 1 : -1) * (activeSortDirection === 'asc' ? 1 : -1);
    });
  }, [facts, activeSortIndex, activeSortDirection]);

  const getSortParams = (columnIndex: number): ThProps['sort'] => ({
    sortBy: {
      index: activeSortIndex ?? undefined,
      direction: activeSortDirection ?? undefined
    },
    onSort: (_event, index, direction) => {
      setActiveSortIndex(index);
      setActiveSortDirection(direction);
    },
    columnIndex
  });

  return (
    <InnerScrollContainer>
      <Table aria-label="Sticky column table" gridBreakPoint="">
        <Thead>
          <Tr>
            <Th modifier="truncate" sort={getSortParams(0)}>{columnNames.name}</Th>
            <Th modifier="truncate" sort={getSortParams(1)}>{columnNames.state}</Th>
            <Th modifier="truncate">{columnNames.header3}</Th>
            <Th modifier="truncate">{columnNames.header4}</Th>
            <Th modifier="truncate">{columnNames.header5}</Th>
            <Th modifier="truncate">{columnNames.header6}</Th>
            <Th modifier="truncate">{columnNames.header7}</Th>
            <Th
              isStickyColumn
              hasLeftBorder
              stickyMinWidth="130px"
              stickyRightOffset="130px"
              modifier="truncate"
            >
              {columnNames.header8}
            </Th>
            <Th isStickyColumn stickyMinWidth="130px" modifier="truncate">
              {columnNames.header9}
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {sortedFacts.map((fact, index) => (
            <Tr key={`${fact.name}-${index}`}>
              <Th modifier="nowrap">{fact.name}</Th>
              <Td dataLabel={columnNames.state} modifier="nowrap">{fact.state}</Td>
              <Td dataLabel={columnNames.header3} modifier="nowrap">{fact.detail1}</Td>
              <Td dataLabel={columnNames.header4} modifier="nowrap">{fact.detail2}</Td>
              <Td dataLabel={columnNames.header5} modifier="nowrap">{fact.detail3}</Td>
              <Td dataLabel={columnNames.header6} modifier="nowrap">{fact.detail4}</Td>
              <Td dataLabel={columnNames.header7} modifier="nowrap">{fact.detail5}</Td>
              <Td
                isStickyColumn
                hasLeftBorder
                stickyMinWidth="130px"
                stickyRightOffset="130px"
                dataLabel={columnNames.header8}
                modifier="nowrap"
              >
                {fact.detail6}
              </Td>
              <Td
                isStickyColumn
                stickyMinWidth="130px"
                dataLabel={columnNames.header9}
                modifier="nowrap"
              >
                {fact.detail7}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </InnerScrollContainer>
  );
};
