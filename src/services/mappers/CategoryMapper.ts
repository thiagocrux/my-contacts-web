class CategoryMapper {
  toDomain(persistenceCategory: any) {
    return {
      id: persistenceCategory.id,
      name: persistenceCategory.name,
    };
  }
}

export default new CategoryMapper();
