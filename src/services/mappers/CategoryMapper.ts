class CategoryMapper {
  toDomain(persistenceCategory: { id: string; name: string }) {
    return {
      id: persistenceCategory.id,
      name: persistenceCategory.name,
    };
  }
}

export default new CategoryMapper();
